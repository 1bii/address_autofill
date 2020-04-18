import React from 'react';
import 'apple-mapkit-js';
import styles from './autofillForm.scss';
import {mapInit, mapSearchInit} from '../../service/mapkitService';
import Recommendations from '../recommendations/recommendations';
import PropTypes from 'prop-types';

export class AutofillForm extends React.Component {
    static propTypes = {
        token: PropTypes.string,
        onSubmit: PropTypes.func
    } 

    constructor(props) {
        super(props);
        this.map;
        this.search;
        this.state = {
            address: {
                line1: '',
                line2: '',
                city: '',
                state: '',
                zipCode: '',
            },
            recommendAddresses: []
        };
    }

    componentDidMount() {
        this.map = mapInit(this.props.token);
        this.search = mapSearchInit({region: map.region});
    }

    onAddressChange = (type, event) => {
        const typeArray = Object.keys(this.state.address);
        const typeSet = new Set(typeArray);
        if (!typeSet.has(type)) {
            return;
        }
        this.setState({
            ...this.state,
            address: {
                ...this.state.address,
                [type]: event.target.value
            }
        }, () => {
            const fullAddress = typeArray
                .map(type => this.state.address[type])
                .filter(sectionString => sectionString.length)
                .join(', ');
            this.search.autocomplete(fullAddress, (error, data) => {
                if (error) {
                    console.log(error);
                    return;
                }
                this.setState({
                    ...this.state,
                    recommendAddresses: data && data.results && data.results.map(address => address.displayLines)
                });
                return;
            });
        });
    };

    render() {
        return (
            <div>
                <div id="map"
            style={{
                width: '100%',
                height: '600px',
                display: 'none'
            }}></div>
                <div className={styles.address}>
                    <div>Address 1</div>
                    <form>
                        <input type="text" name="address1" value={this.state.address.line1} onChange={event => this.onAddressChange('line1', event)}/>
                    </form>
                    <div>Address 2</div>
                    <form>
                        <input type="text" name="address2" value={this.state.address.line2} onChange={event => this.onAddressChange('line2', event)}/>
                    </form>
                    <div>City</div>
                    <form>
                        <input type="text" name="city" value={this.state.address.city} onChange={event => this.onAddressChange('city', event)}/>
                    </form>
                    <div>State</div>
                    <form>
                        <input type="text" name="state" value={this.state.address.state} onChange={event => this.onAddressChange('state', event)}/>
                    </form>
                    <div>Zip Code</div>
                    <form>
                        <input type="text" name="state" value={this.state.address.zipCode} onChange={event => this.onAddressChange('zipCode', event)}/>
                    </form>
                    {this.state.recommendAddresses.length > 0 && <Recommendations addresses={this.state.recommendAddresses}></Recommendations>}
                    <button onClick={() => this.props.onSubmit(this.state.address)}>Submit</button>
                </div>
            </div>
        );
    }
}

export default AutofillForm;
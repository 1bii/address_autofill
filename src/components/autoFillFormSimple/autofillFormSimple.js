import React from 'react';
import 'apple-mapkit-js';
import styles from './autofillFormSimple.scss';
import {mapInit, mapSearchInit} from '../../service/mapkitService';
import Recommendations from '../recommendations/recommendations';
import PropTypes from 'prop-types';

export class AutofillFormSimple extends React.Component {
    static propTypes = {
        token: PropTypes.string,
        onSubmit: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.map;
        this.search;
        this.state = {
            addressInput: '',
            recommendAddresses: []
        };
    }

    componentDidMount() {
        this.map = mapInit(this.props.token);
        this.search = mapSearchInit({region: map.region});
    }

    onAddressLineClicked = (addressArr) => {
        this.setState({
            address: addressArr.join(', '),
            recommendAddresses: []
        });
    }

    onAddressChange = (event) => {
        this.setState({
            ...this.state,
            address: event.target.value
        }, () => {
            this.search.autocomplete(this.state.address, (error, data) => {
                if (error) {
                    console.log(error);
                    return;
                }
                this.setState({
                    ...this.state,
                    recommendAddresses: data && data.results && data.results.map(address => address.displayLines)
                    .filter(addressLines => addressLines[1] !== 'Search Nearby')
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
                    <div>Address</div>
                    <form>
                        <input type="text" name="address" value={this.state.address} onChange={event => this.onAddressChange(event)}/>
                    </form>
                    {this.state.recommendAddresses.length > 0 && <Recommendations addresses={this.state.recommendAddresses} clickCallback={this.onAddressLineClicked}></Recommendations>}
                    <button onClick={() => this.props.onSubmit(this.state.address)}>Submit</button>
                </div>
            </div>
        );
    }
}

export default AutofillFormSimple;
import React from 'react';
import PropTypes from 'prop-types';
import styles from './recommendations.scss';

class Recommendations extends React.Component {
    static propTypes = {
        addresses: PropTypes.array,
        clickCallback: PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={styles.addressSectionTitle}>Address recommendations</div>
                <div className={styles.addressSection}>
                    {this.props.addresses.map((addressArr, idx) => {
                        return (<div className={styles.addressLine} onClick={() => this.props.clickCallback(addressArr)} key={"addressLine" + idx}>
                            {addressArr.map((address, aidx) => <div key={'address' + aidx}>{address}</div>)}
                        </div>);
                    })}
                </div>
            </div>
        );
    }
}

export default Recommendations;
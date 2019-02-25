import React from "react";
import membershipCard from '../../assets/membership card.png';
import * as styles from "../../styles/membership_styles";

class PremiumCard extends React.Component {
    render() {
        return (
            <div>
            <h4 class="d-flex justify-content-between align-items-center mb-3">
            Your Membership Card
            </h4>
            <div class="mb-4 align-items-center">
            <img src={membershipCard} alt="membership card" style={styles.membershipCard}/>
            </div>
            <div class="mb-4">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 class="my-0">One-year Membership</h6>
                    <small class="text-muted">Premium Package ($49.99 for $200+ Value)</small>
                </div>
                <span class="text-muted">$49.99</span>
            </li>
            </div>
            <form class="card p-2">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Promo code"/>
                <div class="input-group-append">
                    <button type="submit" class="btn btn-secondary">Redeem</button>
                </div>
            </div>
            </form>
        </div> 
        );
    }
}

export default PremiumCard;
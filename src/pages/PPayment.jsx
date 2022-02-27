import { AddShoppingCart } from "@material-ui/icons";
// import { axios } from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
// import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import "./Payment.css"

export const PaymentPage = () =>
{

    const [stoken, setstoken] = useState(null);

    const ontoken = (token) =>
    { 
        // console.log(token);
        setstoken(token);
    }

    useEffect(() =>
    {
        const makepaymentreq = async () =>
        { 
            try
            {
                const res = await axios.post("http://localhost:3500/api/checkout/payment", {
                    tokenId: stoken.id,
                    amount:2800
                })
                console.log(res)
            } catch (err)
            {
                console.log(err)
             }
        }
        stoken && makepaymentreq();
    }, [stoken])

    return (

        <div className="main-container">
            <div className="header">
                <a href="/">
                    {/* <AddShoppingCart */}
                    <svg className="valign-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 70" width="30%" height="30%"><title>Kickstarter</title><g class="fill-ksr10-green" fill-rule="nonzero"><path d="M523,15.9 L523,47.3 C523,54.8 529.046512,61 536.403101,61 C542.449612,61 547.186047,57.3 548.899225,52 L550.310078,54.5 C552.829457,58.7 557.263566,61 561.79845,61 C569.155039,61 575,55.2 575,47.8 C575,45.3 574.395349,42.9 572.984496,40.7 L567.744186,32.4 C571.573643,29.5 573.891473,24.9 573.891473,19.3 C573.891473,9 565.627907,1 555.046512,1 L537.612403,1 C528.139535,1 523,6.1 523,15.9"></path><path d="M519,49.5030231 C519,43.7552636 515.323467,39.4192345 510.255814,38.4108557 C512.541226,36.8982874 513.932347,34.3773402 513.932347,31.04969 C513.932347,27.7220398 512.640592,25.2010926 510.255814,23.6885243 C515.422833,22.6801455 519,18.4449543 519,12.5963569 C519,6.14273218 513.832981,1 507.572939,1 L486.706131,1 C477.167019,1 472,6.14273218 472,15.9240071 L472,46.074535 C472,55.9566478 477.167019,60.9985421 486.706131,60.9985421 L507.572939,60.9985421 C513.832981,61.09938 519,55.9566478 519,49.5030231"></path><path d="M455.8,47.5 L455.8,26.8 C462.5,26.5 468,20.9 468,13.9 C468,6.7 462.2,1 455.1,1 L427.9,1 C420.8,1 415,6.6 415,13.9 C415,20.9 420.5,26.4 427.2,26.8 L427.2,47.5 C427.2,54.9 433.5,61 441.3,61 C449.6,61 455.8,54.9 455.8,47.5"></path><path d="M362,15.9 L362,47.3 C362,54.8 368.046512,61 375.403101,61 C381.449612,61 386.186047,57.3 387.899225,52 L389.310078,54.5 C391.829457,58.7 396.263566,61 400.79845,61 C408.155039,61 414,55.2 414,47.8 C414,45.3 413.395349,42.9 411.984496,40.7 L406.744186,32.4 C410.573643,29.5 412.891473,24.9 412.891473,19.3 C412.891473,9 404.627907,1 394.046512,1 L376.612403,1 C367.24031,1 362,6.1 362,15.9"></path><path d="M328.919678,49.5695364 C332.331325,56.6225166 337.147767,60 343.067976,60 C353.704285,60 361.229976,50.3642384 356.614219,39.5364238 L344.272087,10.9271523 C341.261811,3.87417219 336.746396,0 329.020021,0 C321.393988,0 316.878574,3.87417219 313.767955,10.9271523 L301.425823,39.5364238 C296.709724,50.3642384 304.335757,60 314.871723,60 C320.69159,60 325.508032,56.6225166 328.919678,49.5695364"></path><path d="M293.776938,47.5 L293.776938,26.8 C300.489603,26.5 306,20.9 306,13.9 C306,6.7 300.189036,1 293.075614,1 L265.924386,1 C258.810964,1 253,6.6 253,13.9 C253,20.9 258.510397,26.4 265.223062,26.8 L265.223062,47.5 C265.223062,54.9 271.534972,61 279.349716,61 C287.465028,61 293.776938,54.9 293.776938,47.5"></path><path d="M253,41.5361842 C253,35.5164474 249.993737,31.3026316 245.484342,27.2894737 L241.776618,23.9786184 C247.187891,23.1759868 250.795407,19.5641447 250.795407,14.2467105 C250.795407,5.31743421 243.680585,0 228.649269,0 C213.91858,0 205.300626,7.42434211 205.300626,19.1628289 C205.300626,25.1825658 208.407098,29.2960526 212.916493,33.4095395 L216.524008,36.7203947 L216.4238,36.7203947 C209.709812,36.7203947 205,40.6332237 205,46.7532895 C205,55.5822368 212.415449,61 228.248434,61 C243.780793,61 253,53.4753289 253,41.5361842" id="Shape-Copy-7"></path><path d="M202,46.5662429 C202,43.7802283 201.192523,41.0937143 199.476636,38.7057019 L193.016822,29.8501557 L199.476636,20.9946095 C201.192523,18.7060976 202,15.920083 202,13.1340685 C202,5.7710301 195.842991,0.0995005189 188.575701,0.0995005189 C184.336449,0.0995005189 180.097196,2.18901142 177.472897,5.7710301 L174.343925,10.1490529 C173.13271,4.27852231 167.985047,0 161.424299,0 C153.854206,0 148,5.97003114 148,13.3330695 L148,46.6657434 C148,54.0287818 153.95514,59.9988129 161.424299,59.9988129 C167.884112,59.9988129 172.930841,56.0187922 174.242991,50.2477621 L177.069159,54.2277828 C179.693458,58.0088025 184.033645,59.9988129 188.272897,59.9988129 C195.842991,60.0983134 202,53.9292813 202,46.5662429"></path><path d="M143,43.5099338 C143,37.1523179 139.818713,32.6821192 133.45614,30 C139.818713,27.3178808 143,22.9470199 143,16.4900662 C143,6.85430464 134.947368,0 122.023392,0 C104.725146,0 92,12.8145695 92,30 C92,47.1854305 104.725146,60 122.023392,60 C134.947368,60 143,53.1456954 143,43.5099338"></path><path d="M72.5499366,0 C64.4666385,0 58,6.57807309 58,14.3521595 L58,45.6478405 C58,53.5215947 64.4666385,60 72.4488953,60 C80.6332346,60 86.9988319,53.4219269 86.9988319,45.6478405 L86.9988319,14.3521595 C87.0998731,6.57807309 80.6332346,0 72.5499366,0"></path><path d="M54,46.5662429 C54,43.7802283 53.1940299,41.0937143 51.4813433,38.7057019 L45.0335821,29.8501557 L51.4813433,20.9946095 C53.1940299,18.7060976 54,15.920083 54,13.1340685 C54,5.7710301 47.8544776,0.0995005189 40.6007463,0.0995005189 C36.369403,0.0995005189 32.1380597,2.18901142 29.5186567,5.7710301 L26.2947761,10.1490529 C25.0858209,4.27852231 19.9477612,0 13.3992537,0 C5.84328358,0 0,5.97003114 0,13.3330695 L0,46.6657434 C0,54.0287818 5.94402985,59.9988129 13.3992537,59.9988129 C19.8470149,59.9988129 24.8843284,56.0187922 26.1940299,50.2477621 L29.0149254,54.2277828 C31.6343284,58.0088025 35.9664179,59.9988129 40.1977612,59.9988129 C47.8544776,60.0983134 54,53.9292813 54,46.5662429"></path></g></svg>
                </a>
            </div>
            <div className="grid-container">
                <div className="left-side">
                    <div className="left-side-container">
                        <h1>Pledge summary</h1>
                        <div>
                            <p className="p-tag1">
                                <span>
                                    We won’t charge you at this time. If the project reaches its funding goal, your payment method will be charged when the campaign ends. You’ll receive a confirmation email at
                                </span>
                                <span> <strong>gmail</strong> </span>
                                when your pledge is successfully processed.
                            </p>
                            <div className="image-box">
                                <div className="inside-image-box">
                                    <a href="/">
                                        <img style={{ width: "210px" }} src="https://ksr-ugc.imgix.net/assets/035/598/252/e9920958a59744b4ecfcddc6e815e669_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1637055641&auto=format&frame=1&q=92&s=f3b4bda4a61d732446d47e01c5c8a500" alt="image1" />
                                    </a>
                                    <div className="right-side-image-text">
                                        <p><a href="/">Old-school Essentials Fantasy RPG Box sets</a></p>
                                        <p style={{ color: "green" }}>570% funded</p>
                                        <p><span>By</span> <a href="/">Exalted Funded</a></p>
                                    </div>
                                </div>
                                <h4 className="table-heading">Your Pladge</h4>
                                <div className="p3">
                                    <div className="inside-p3">
                                        <p>Reward</p>
                                        <p>No reward, I just want to support the project</p>
                                    </div>
                                    <div className="inside-p3-1">
                                        <p>Bonus</p>
                                        <p>$10.00</p>
                                    </div>
                                    <hr className="hz-2" />
                                </div>
                                <div className="total">
                                    <p><strong>Total Amount</strong></p>
                                    <p className="total-price">$10.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="payment-col">
                        <div className="paymentcol1">
                            <lable>Card Number</lable>
                            <img style={{ width: "150px" }} src="https://www.russellschwartzdds.com/storage/app/media/creditcards.png" />
                        </div>
                        <div className="input-payment">
                            <input name="card-number" type="number" placeholder="Card number" />
                            <div className="error"></div>
                        </div>
                        <div className="paymentcol1 paymentcol2">
                            <lable>Card Holder Name</lable>
                        </div>
                        <div className="input-payment">
                            <input name="card-holder" type="number" placeholder="Card Holder Name" />
                            <div className="error"></div>
                        </div>
                        <div className="dateandSecurity">
                            <div className="expiration">
                                <div className="label-exp">
                                    <label htmlFor="Expiration">Expiration</label><br />
                                    <input type="number" placeholder="dd/yy" />
                                </div>
                            </div>
                            <div className="security">
                                <div className="label-exp">
                                    <label className="lebal-cvv" htmlFor="Security code">Security code</label><br />
                                    <input className="input-cvv" type="number" placeholder="CVV" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="paymentcol1 paymentcol2">
                                <lable>Zip/Postal code</lable>
                            </div>
                            <div className="input-payment">
                                <input name="card-holder" type="number" placeholder="Zip/Postal code" />
                                <div className="error"></div>
                            </div>
                        </div>
                        <div className="paymentcol3">
                            <input className="check-box" type="checkbox" id="scales" name="scales" />
                            <label className="lebal-check-box" for="scales">Remember this card for future pledges</label>
                        </div>
                        <br />
                        <div className="paymentcol4">
                            <input className="check-box" type="checkbox" id="scales" name="scales" />
                            <strong><span className="lebal-check-box" for="scales">I understand that rewards or reimbursements aren’t guaranteed by either Kickstarter or the creator.</span></strong>
                        </div>
                        <br />
                        {/* <p className="anchertaglast"><a href="/">Learn more about accountability.</a></p> */}
                        <button className="button1">Pay Now</button>
                        <br />
                        <div className="rewd">
                            <br />
                            <br />
                            {/* <AddShoppingCart className="button1"/> <span>Pay Using Stripe</span> */}
                            <div className="button11" >Pay Using Stripe</div>
                        </div>
                        <br />
                        <p className="p1tag">Backing means supporting a creative project, regardless of the outcome.</p>
                        <div className="paymentcol4">
                            <input className="check-box" type="checkbox" id="scales" name="scales" />
                            <strong><span className="lebal-check-box" for="scales">I understand that rewards or reimbursements aren’t guaranteed by either Kickstarter or the creator.</span></strong>
                        </div>
                        <br />
                        {/* <p className="anchertaglast"><a href="/">Learn more about accountability.</a></p> */}
                        <div className="button1">
                            <StripeCheckout name="KICKSTARTER" image="https://d3mlfyygrfdi2i.cloudfront.net/10db/ksr-logo-app-banner-border.svg"
                                amount={2800}
                                token={ontoken}
                                stripeKey="pk_test_51KUXUcSHvjPvbOCWIcGQhgDNGktuCObUDcX6EMFR3Bgdqh1SYvHYq5UTL35VmnUD75GxrUbdwQfXzwQCf6yaiY6M00D2tqYhRF"
                            >

                                <button className="button1">Pay Now</button>
                            </StripeCheckout>
                            <p className="last-p">By submitting your pledge, you agree to Kickstarter's Terms of Use, and Privacy Policy, and for our payment processor, Stripe, to charge your payment method.</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
const Contact = () => {
    return (
        <>
            <section class="contact-page">
                <div class="container">
                    <h3>Contact Us</h3>
                    <p>Any question or remarks? Just write us a message!</p>
                    <div class="form-outre">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="form-left">
                                    <h4>Contact Information</h4>
                                    <h5>Say something to start a live chat!</h5>
                                    <p><img src={require("../assets/images/bxs_phone-call.png")} alt="" /> 3456 789</p>
                                    <p><img src={require("../assets/images/ic_sharp-email.png")} alt="" /> demo@gmail.com</p>
                                    <p><img src={require("../assets/images/carbon_location-filled.png")} alt="" />132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="form-right">
                                    <form>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>First Name</label>
                                                    <input type="text" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Last Name</label>
                                                    <input type="text" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Email</label>
                                                    <input type="text" placeholder="" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Phone Number</label>
                                                    <input type="text" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Message</label>
                                                    <textarea placeholder="Write your message.."></textarea>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="submit" value="Send Message" />
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
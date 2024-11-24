import React from "react";

const ContactUs = () => {
    return (
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <p className="text-gray-600 mb-6">
                  Feel free to reach out to us in case of any queries. We will be
                  happy to assist you in anything and everything relevant to the
                  Causmic Club MUN.
                </p>
    
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <span className="text-xl text-yellow-500">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-gray-700">ishmeetsinghxa@gmail.com</p>
                    </div>
                  </div>
    
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <span className="text-xl text-yellow-500">
                      <i className="fas fa-phone-alt"></i>
                    </span>
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p className="text-gray-700">+91 7719450870</p>
                    </div>
                  </div>
    
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <span className="text-xl text-yellow-500">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <div>
                      <h4 className="font-bold">Address</h4>
                      <p className="text-gray-700">Guru Gian Vihar Jawaddi, Ludhiana 141013.</p>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Map */}
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.053810261299!2d76.78465541508085!3d30.72783798164188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed56dd1eb7f3%3A0x6c6f65107a8f8e0c!2sSt.%20John's%20High%20School!5e0!3m2!1sen!2sin!4v1699371135100!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      );
    };
export default ContactUs;

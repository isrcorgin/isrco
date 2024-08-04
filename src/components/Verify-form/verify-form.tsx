"use client"

import React, { FormEvent, useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";

// Define the type for the response data
interface VerifyResponse {
  certificateUrl: string; 
}

const ContactForm: React.FC = () => {
  const [authCode, setAuthCode] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleVerify = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response: AxiosResponse<VerifyResponse> = await axios.post<VerifyResponse>("https://isrc-backend-gwol.onrender.com/api/verify", {
        authCode
      });
      if (response.data.certificateUrl) {
        setImageUrl(response.data.certificateUrl);
        console.log(imageUrl)
      } else {
        console.error("Certificate URL not found in response");
      }

    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="contact-area ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="card shadow-lg border-0 transition-transform hover:scale-105">
              <div className="card-body p-5 text-center">
                {/* Conditionally render the form or image based on imageUrl */}
                {imageUrl ? (
                  <div className="mt-4">
                    <h3 className="card-title mb-4">Verified Certificate!</h3>
                    <Image
                      src={imageUrl}
                      alt="Certificate"
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                ) : (
                <>
                 <h3 className="card-title mb-4">Verify Your Certificate</h3>
                  <p className="card-text mb-4">
                    Enter your certificate number.
                  </p>
                  <form id="verificationForm" onSubmit={handleVerify}>
                    <div className="form-group mb-4">
                      <label htmlFor="certificateNumber" className="form-label sr-only">Certificate Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="certificateNumber"
                        id="certificateNumber"
                        placeholder="Enter Certificate Number"
                        required
                        value={authCode}
                        onChange={(e) => setAuthCode(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Verify
                    </button>
                  </form>
                </>
                 
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen font-sans bg-white">
            <Header />
            <main className="pt-24 pb-16 lg:pt-32 lg:pb-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">Terms & Conditions</h1>

                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Welcome to AK Enterprises. By accessing or using our website and services, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using our services. If you do not agree with any part of these terms, please do not use our website or services.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. About Us</h2>
                            <p>
                                AK Enterprises provides scrap collection, dismantling, and recycling services including office scrap, electrical scrap, HVAC scrap, metal scrap, industrial scrap, and wooden scrap.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Website</h2>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>The content on this website is for general information purposes only.</li>
                                <li>We reserve the right to modify, update, or remove website content at any time without prior notice.</li>
                                <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Service Terms</h2>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>All scrap services are subject to availability, site conditions, and mutual agreement.</li>
                                <li>Scrap pickup, dismantling, and pricing depend on material type, quantity, condition, and location.</li>
                                <li>Final pricing may be confirmed after physical inspection of scrap materials.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pricing & Payments</h2>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Scrap prices are based on prevailing market rates at the time of evaluation.</li>
                                <li>Payments will be made as agreed between both parties after scrap collection or dismantling.</li>
                                <li>Any additional services such as reinstatement or special dismantling work may involve extra charges, which will be communicated in advance.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Client Responsibilities</h2>
                            <p className="mb-4">Clients agree to:</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Provide accurate information regarding scrap quantity and material type</li>
                                <li>Ensure safe access to the scrap location</li>
                                <li>Obtain necessary internal approvals or permissions (if required)</li>
                                <li>Clear personal or confidential items before scrap removal</li>
                            </ul>
                            <p className="mt-4">AK Enterprises will not be responsible for items mistakenly included in scrap material.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Safety & Compliance</h2>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>We follow standard safety practices during dismantling and scrap removal.</li>
                                <li>Clients must inform us of any hazardous materials or restricted areas before service execution.</li>
                                <li>We reserve the right to refuse service if conditions are unsafe or non-compliant.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
                            <p>
                                All content on this website, including text, logos, images, and graphics, is the property of AK Enterprises and may not be reproduced, copied, or used without written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                            <p className="mb-4">AK Enterprises shall not be liable for:</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Any indirect, incidental, or consequential damages</li>
                                <li>Delays caused due to unforeseen circumstances</li>
                                <li>Loss arising from incorrect information provided by the client</li>
                            </ul>
                            <p className="mt-4">Our liability, if any, shall be limited to the agreed service value.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
                            <p>
                                Our website may contain links to external websites for reference. AK Enterprises is not responsible for the content or policies of third-party websites.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                            <p>
                                We reserve the right to update or modify these Terms & Conditions at any time. Continued use of our website or services after changes indicates acceptance of the updated terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                            <p>
                                These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts in Bangalore, Karnataka.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

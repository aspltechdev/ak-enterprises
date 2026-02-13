import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Disclaimer() {
    return (
        <div className="min-h-screen font-sans bg-white">
            <Header />
            <main className="pt-24 pb-16 lg:pt-32 lg:pb-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">Disclaimer</h1>

                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p className="italic font-medium">
                            "The information provided on the website of AK Enterprises is for general informational purposes only. Any reliance you place on such information is strictly at your own risk."
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Information Disclaimer</h2>
                            <p>
                                While we strive to keep the content accurate and up to date, we make no representations or warranties of any kind — express or implied — about the completeness, accuracy, reliability, suitability, or availability of the information, services, or related graphics contained on the website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Disclaimer</h2>
                            <p>
                                All services offered by AK Enterprises, including scrap collection, dismantling, recycling, and related activities, are subject to site conditions, material availability, and mutual agreement. Actual service outcomes, pricing, and timelines may vary based on inspection and operational factors.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Professional Advice</h2>
                            <p>
                                The content on this website does not constitute professional, legal, financial, or environmental advice. Users are encouraged to consult relevant professionals before making decisions based on the information provided on this website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. External Links Disclaimer</h2>
                            <p>
                                Our website may contain links to third-party websites for additional information or convenience. AK Enterprises has no control over the nature, content, or availability of those sites and does not endorse or assume responsibility for any third-party content.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                            <p>
                                In no event shall AK Enterprises be liable for any loss or damage, including without limitation indirect or consequential loss or damage, arising out of or in connection with the use of this website or our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to Disclaimer</h2>
                            <p>
                                AK Enterprises reserves the right to modify, update, or change this Disclaimer at any time without prior notice. Users are encouraged to review this page periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Consent</h2>
                            <p>
                                By using this website, you hereby consent to this Disclaimer and agree to its terms.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

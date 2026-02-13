import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen font-sans bg-white">
            <Header />
            <main className="pt-24 pb-16 lg:pt-32 lg:pb-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">Privacy Policy</h1>

                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            At AK Enterprises, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or contact us for our services.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                            <p className="mb-4">
                                We may collect the following information when you interact with us:
                            </p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>Name</li>
                                <li>Phone number</li>
                                <li>Email address</li>
                                <li>Company name</li>
                                <li>Location details</li>
                                <li>Scrap service inquiries</li>
                            </ul>
                            <p className="mt-4 italic text-gray-500">
                                This information is collected only when you voluntarily provide it through contact forms, phone calls, emails, or direct communication.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                            <p className="mb-4">The information collected is used for the following purposes:</p>
                            <ul className="list-disc pl-8 space-y-2">
                                <li>To respond to inquiries and service requests</li>
                                <li>To provide scrap collection, dismantling, and recycling services</li>
                                <li>To communicate regarding quotes, pickups, or service updates</li>
                                <li>To improve our website and customer service</li>
                                <li>For internal record keeping</li>
                            </ul>
                            <p className="mt-4 font-semibold">
                                We do not sell, rent, or share your personal information with third parties for marketing purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Protection & Security</h2>
                            <p>
                                AK Enterprises takes appropriate security measures to protect your personal data from unauthorized access, misuse, or disclosure. While we strive to use commercially acceptable means to protect your information, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies</h2>
                            <p>
                                Our website may use cookies to enhance user experience and analyze website traffic. Cookies do not collect personally identifiable information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such external sites.
                            </p>
                        </section>



                        {/* <p className="text-gray-400 text-sm pt-8">
                            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </p> */}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

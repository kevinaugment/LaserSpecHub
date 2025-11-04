import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: 'LaserSpecHub Privacy Policy - How we collect, use, and protect your data',
  path: '/privacy',
  keywords: ['privacy policy', 'data protection', 'user privacy', 'data security'],
});

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last Updated: November 2, 2025</p>

      {/* Section 1: Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to LaserSpecHub. We are committed to protecting your privacy and ensuring the security 
          of your personal information. This Privacy Policy explains how we collect, use, disclose, and 
          safeguard your information when you visit our website and use our services.
        </p>
        <p className="text-gray-700 leading-relaxed">
          By accessing or using LaserSpecHub, you agree to the terms of this Privacy Policy. If you do 
          not agree with the terms of this policy, please do not access or use our services.
        </p>
      </section>

      {/* Section 2: Information We Collect */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Information You Provide</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          We collect information that you voluntarily provide to us when you:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
          <li>Submit equipment information through our user submission forms</li>
          <li>Register for an administrator account</li>
          <li>Contact us through our contact form</li>
          <li>Subscribe to newsletters or updates (if applicable)</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          This information may include: name, email address, equipment specifications, company information, 
          and any other information you choose to provide.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Automatically Collected Information</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          When you visit our website, we automatically collect certain information about your device, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>IP address and general location information</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages visited and time spent on pages</li>
          <li>Referring website addresses</li>
          <li>Device identifiers</li>
        </ul>
      </section>

      {/* Section 3: How We Use Your Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li><strong>Service Provision:</strong> To operate, maintain, and provide the features of our platform</li>
          <li><strong>Equipment Database:</strong> To display and compare laser equipment specifications</li>
          <li><strong>User Submissions:</strong> To review and potentially publish user-contributed equipment data</li>
          <li><strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
          <li><strong>Improvements:</strong> To analyze usage patterns and improve our services</li>
          <li><strong>Security:</strong> To detect, prevent, and address technical issues and fraudulent activity</li>
          <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
        </ul>
      </section>

      {/* Section 4: Data Sharing and Disclosure */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We do not sell, trade, or rent your personal information to third parties. We may share your 
          information only in the following circumstances:
        </p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Public Information</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Equipment specifications and technical data submitted by users may be displayed publicly on our 
          platform. We do not publish your personal contact information without your explicit consent.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Service Providers</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          We may share your information with third-party service providers who assist us in operating our 
          website, conducting our business, or servicing you, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
          <li>Hosting services (Vercel)</li>
          <li>Database services (Turso)</li>
          <li>Analytics providers (if applicable)</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          These service providers are bound by confidentiality obligations and are prohibited from using 
          your information for any other purpose.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Legal Requirements</h3>
        <p className="text-gray-700 leading-relaxed">
          We may disclose your information if required to do so by law or in response to valid requests 
          by public authorities (e.g., a court or government agency).
        </p>
      </section>

      {/* Section 5: Data Security */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We implement appropriate technical and organizational security measures to protect your personal 
          information against unauthorized access, alteration, disclosure, or destruction. These measures include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
          <li>Encryption of data in transit using HTTPS/SSL</li>
          <li>Password hashing using industry-standard bcrypt algorithm</li>
          <li>Secure authentication using JSON Web Tokens (JWT)</li>
          <li>Regular security updates and patches</li>
          <li>Access controls and authentication for administrative functions</li>
          <li>Database hosted on secure, distributed infrastructure</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          However, no method of transmission over the Internet or electronic storage is 100% secure. While 
          we strive to use commercially acceptable means to protect your personal information, we cannot 
          guarantee its absolute security.
        </p>
      </section>

      {/* Section 6: Cookies and Tracking */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking Technologies</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We use cookies and similar tracking technologies to track activity on our service and hold certain information:
        </p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">6.1 Essential Cookies</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          We use authentication cookies to keep you logged in to the admin panel. These cookies are essential 
          for the website to function properly.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Analytics Cookies (Optional)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          We may use analytics services (such as Google Analytics) to help us understand how users interact 
          with our platform. You can opt-out of analytics tracking through your browser settings.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">6.3 Managing Cookies</h3>
        <p className="text-gray-700 leading-relaxed">
          Most web browsers allow you to control cookies through their settings. However, disabling cookies 
          may affect your ability to use certain features of our website, particularly administrative functions.
        </p>
      </section>

      {/* Section 7: Your Rights */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">7. Your Privacy Rights</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          You have the following rights regarding your personal information:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
          <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
          <li><strong>Correction:</strong> Request correction of any inaccurate or incomplete information</li>
          <li><strong>Deletion:</strong> Request deletion of your personal information</li>
          <li><strong>Objection:</strong> Object to our processing of your personal information</li>
          <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
        </p>
      </section>

      {/* Section 8: Data Retention */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We retain your personal information only for as long as necessary to fulfill the purposes outlined 
          in this Privacy Policy, unless a longer retention period is required or permitted by law.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li><strong>Equipment Data:</strong> Retained indefinitely as part of our public database</li>
          <li><strong>User Submissions:</strong> Retained until reviewed and either approved or rejected</li>
          <li><strong>Account Information:</strong> Retained for as long as your account is active</li>
          <li><strong>Analytics Data:</strong> Retained for 26 months (if using Google Analytics)</li>
        </ul>
      </section>

      {/* Section 9: Children's Privacy */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
        <p className="text-gray-700 leading-relaxed">
          Our service is not directed to individuals under the age of 18. We do not knowingly collect personal 
          information from children. If you are a parent or guardian and believe your child has provided us 
          with personal information, please contact us so we can delete such information.
        </p>
      </section>

      {/* Section 10: International Data Transfers */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Your information may be transferred to and maintained on computers located outside of your state, 
          province, country, or other governmental jurisdiction where data protection laws may differ.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our database is hosted on Turso's global distributed infrastructure, and our website is deployed 
          on Vercel's edge network. By using our service, you consent to the transfer of your information 
          to these facilities.
        </p>
      </section>

      {/* Section 11: Changes to Privacy Policy */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
          the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
        </p>
        <p className="text-gray-700 leading-relaxed">
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy 
          Policy are effective when they are posted on this page.
        </p>
      </section>

      {/* Section 12: Contact Us */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-2"><strong>LaserSpecHub</strong></p>
          <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@laserspechub.com" className="text-blue-600 hover:underline">privacy@laserspechub.com</a></p>
          <p className="text-gray-700 mb-2">Website: <a href="https://www.laserspechub.com" className="text-blue-600 hover:underline">https://www.laserspechub.com</a></p>
          <p className="text-gray-700">Contact Form: <a href="/contact" className="text-blue-600 hover:underline">/contact</a></p>
        </div>
      </section>

      {/* Footer Note */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          This privacy policy was last updated on November 2, 2025. By continuing to use LaserSpecHub, 
          you acknowledge that you have read and understood this Privacy Policy.
        </p>
      </div>

    </div>
  )
}


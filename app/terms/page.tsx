export const metadata = {
  title: 'Terms of Service',
  description: 'LaserSpecHub Terms of Service - Rules and guidelines for using our platform',
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-gray-600 mb-8">Last Updated: November 2, 2025</p>

      {/* Section 1: Agreement to Terms */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          By accessing or using LaserSpecHub ("the Service"), you agree to be bound by these Terms of Service 
          ("Terms"). If you disagree with any part of these terms, you may not access the Service.
        </p>
        <p className="text-gray-700 leading-relaxed">
          These Terms apply to all visitors, users, and others who access or use the Service. We reserve the 
          right to update and change the Terms by posting updates and changes to the website. You are advised 
          to check the Terms from time to time for any updates or changes that may impact you.
        </p>
      </section>

      {/* Section 2: Description of Service */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          LaserSpecHub provides a comprehensive platform for laser equipment specification comparison and analysis, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li><strong>Equipment Database:</strong> Searchable database of laser cutting and processing equipment</li>
          <li><strong>Comparison Tools:</strong> Side-by-side comparison of equipment specifications</li>
          <li><strong>Calculators:</strong> Professional tools for power calculation, cost estimation, and more</li>
          <li><strong>Technical Guides:</strong> Educational content about laser equipment selection and usage</li>
          <li><strong>User Submissions:</strong> Community-driven equipment data contribution</li>
        </ul>
      </section>

      {/* Section 3: User Accounts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Registration</h2>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Account Creation</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Administrative accounts are created by invitation only. You are responsible for safeguarding the 
          password that you use to access the Service and for any activities or actions under your password.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Account Responsibilities</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          You agree to:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>Provide accurate, current, and complete information during registration</li>
          <li>Maintain and promptly update your account information</li>
          <li>Maintain the security of your password and account</li>
          <li>Notify us immediately of any unauthorized use of your account</li>
          <li>Accept responsibility for all activities that occur under your account</li>
        </ul>
      </section>

      {/* Section 4: User Conduct */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use and Conduct</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree NOT to:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>Submit false, misleading, or inaccurate equipment specifications</li>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe upon the rights of others, including intellectual property rights</li>
          <li>Upload viruses, malware, or other malicious code</li>
          <li>Attempt to gain unauthorized access to the Service or related systems</li>
          <li>Interfere with or disrupt the Service or servers</li>
          <li>Use automated systems (bots, scrapers) without permission</li>
          <li>Impersonate any person or entity</li>
          <li>Collect or store personal data about other users</li>
          <li>Use the Service for any commercial purpose without authorization</li>
        </ul>
      </section>

      {/* Section 5: Content and Intellectual Property */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. Content and Intellectual Property Rights</h2>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Our Content</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Service and its original content, features, and functionality are owned by LaserSpecHub and are 
          protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">5.2 User-Submitted Content</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          When you submit equipment specifications or other content to the Service, you grant us a worldwide, 
          non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display such content 
          for the purpose of operating and promoting the Service.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          You represent and warrant that:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
          <li>You own or have the right to submit the content</li>
          <li>The content does not violate any third-party rights</li>
          <li>The content is accurate to the best of your knowledge</li>
          <li>The content does not contain confidential or proprietary information</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 mt-6">5.3 Trademarks</h3>
        <p className="text-gray-700 leading-relaxed">
          Equipment brand names, model names, and logos mentioned on the Service are the property of their 
          respective owners. Use of these names and logos is for identification purposes only and does not 
          imply endorsement.
        </p>
      </section>

      {/* Section 6: Disclaimer of Warranties */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">6. Disclaimer of Warranties</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="text-gray-700 leading-relaxed font-semibold mb-2">
            IMPORTANT: PLEASE READ THIS SECTION CAREFULLY
          </p>
          <p className="text-gray-700 leading-relaxed">
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND.
          </p>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          We expressly disclaim all warranties, whether express, implied, or statutory, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
          <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
          <li>Any warranties regarding the accuracy, reliability, or completeness of equipment specifications</li>
          <li>Any warranties that the Service will be uninterrupted, secure, or error-free</li>
          <li>Any warranties regarding the results obtained from using the Service</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 mt-6">6.1 Data Accuracy</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Equipment specifications displayed on the Service are provided for informational purposes only. While 
          we strive to ensure accuracy, we do not guarantee that all information is current, accurate, or complete. 
          You should always verify specifications directly with manufacturers before making purchasing decisions.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Third-Party Links</h3>
        <p className="text-gray-700 leading-relaxed">
          The Service may contain links to third-party websites or services that are not owned or controlled by 
          LaserSpecHub. We have no control over, and assume no responsibility for, the content, privacy policies, 
          or practices of any third-party websites or services.
        </p>
      </section>

      {/* Section 7: Limitation of Liability */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <p className="text-gray-700 leading-relaxed font-semibold">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL LASERSPECHUB, ITS DIRECTORS, EMPLOYEES, 
            PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
            OR PUNITIVE DAMAGES.
          </p>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          This includes, without limitation, damages for:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
          <li>Loss of profits, revenue, data, or use</li>
          <li>Business interruption</li>
          <li>Equipment purchases based on information from the Service</li>
          <li>Any other intangible losses</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          This limitation applies regardless of the legal theory (contract, tort, negligence, strict liability, 
          or otherwise) and whether or not we have been informed of the possibility of such damage.
        </p>
      </section>

      {/* Section 8: Indemnification */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
        <p className="text-gray-700 leading-relaxed">
          You agree to indemnify, defend, and hold harmless LaserSpecHub and its officers, directors, employees, 
          contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, 
          awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-4">
          <li>Your violation of these Terms of Service</li>
          <li>Your use or misuse of the Service</li>
          <li>Your violation of any rights of another party</li>
          <li>Content you submit to the Service</li>
        </ul>
      </section>

      {/* Section 9: Termination */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">9.1 Termination by Us</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          We may terminate or suspend your account and access to the Service immediately, without prior notice or 
          liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">9.2 Termination by You</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you wish to terminate your account, you may simply discontinue using the Service or contact us to 
          request account deletion.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">9.3 Effect of Termination</h3>
        <p className="text-gray-700 leading-relaxed">
          Upon termination, your right to use the Service will immediately cease. All provisions of the Terms 
          which by their nature should survive termination shall survive, including ownership provisions, warranty 
          disclaimers, indemnity, and limitations of liability.
        </p>
      </section>

      {/* Section 10: Governing Law */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">10. Governing Law and Dispute Resolution</h2>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">10.1 Governing Law</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which 
          LaserSpecHub operates, without regard to its conflict of law provisions.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">10.2 Dispute Resolution</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Any disputes arising out of or relating to these Terms or the Service shall be resolved through:
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
          <li><strong>Informal Negotiation:</strong> First, contact us to attempt to resolve the issue informally</li>
          <li><strong>Mediation:</strong> If informal resolution fails, both parties agree to attempt mediation</li>
          <li><strong>Arbitration or Litigation:</strong> As a last resort, disputes may be resolved through arbitration or courts</li>
        </ol>
      </section>

      {/* Section 11: Changes to Terms */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms of Service</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision 
          is material, we will provide at least 30 days' notice prior to any new terms taking effect.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          What constitutes a material change will be determined at our sole discretion. By continuing to access 
          or use our Service after revisions become effective, you agree to be bound by the revised terms.
        </p>
        <p className="text-gray-700 leading-relaxed">
          If you do not agree to the new terms, you are no longer authorized to use the Service.
        </p>
      </section>

      {/* Section 12: General Provisions */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">12. General Provisions</h2>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">12.1 Entire Agreement</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          These Terms constitute the entire agreement between you and LaserSpecHub regarding the use of the Service, 
          superseding any prior agreements between you and LaserSpecHub relating to your use of the Service.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">12.2 Severability</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited 
          or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force 
          and effect and enforceable.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">12.3 Waiver</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The failure of LaserSpecHub to enforce any right or provision of these Terms will not be deemed a waiver 
          of such right or provision.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">12.4 Assignment</h3>
        <p className="text-gray-700 leading-relaxed">
          You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written 
          consent. Any attempt by you to assign or transfer these Terms without such consent will be null and void. 
          We may freely assign or transfer these Terms without restriction.
        </p>
      </section>

      {/* Section 13: Contact Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-2"><strong>LaserSpecHub</strong></p>
          <p className="text-gray-700 mb-2">Email: <a href="mailto:support@laserspechub.com" className="text-blue-600 hover:underline">support@laserspechub.com</a></p>
          <p className="text-gray-700 mb-2">Legal: <a href="mailto:legal@laserspechub.com" className="text-blue-600 hover:underline">legal@laserspechub.com</a></p>
          <p className="text-gray-700 mb-2">Website: <a href="https://laser-spec-hub.vercel.app" className="text-blue-600 hover:underline">https://laser-spec-hub.vercel.app</a></p>
          <p className="text-gray-700">Contact Form: <a href="/contact" className="text-blue-600 hover:underline">/contact</a></p>
        </div>
      </section>

      {/* Acknowledgment */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">14. Acknowledgment</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-gray-700 leading-relaxed font-semibold mb-2">
            BY USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you do not agree to these Terms, please do not use the Service.
          </p>
        </div>
      </section>

      {/* Footer Note */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          These Terms of Service were last updated on November 2, 2025. Your continued use of LaserSpecHub 
          constitutes acceptance of these terms.
        </p>
      </div>

    </div>
  )
}


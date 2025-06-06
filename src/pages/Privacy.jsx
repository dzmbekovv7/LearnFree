import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Database, Globe, Mail } from "lucide-react";

const infoSections = [
  {
    title: "Your Data Matters",
    icon: <Database className="text-indigo-500" size={32} />,
    content: "We collect minimal data — just what’s needed to personalize your reading experience, such as your theme preferences or saved articles.",
  },
  {
    title: "No Tracking Without Consent",
    icon: <ShieldCheck className="text-green-500" size={32} />,
    content: "We never track your behavior unless you explicitly agree. Your privacy is more important than analytics.",
  },
  {
    title: "International Compliance",
    icon: <Globe className="text-blue-500" size={32} />,
    content: "Our infrastructure complies with GDPR and global regulations. Your data is safe whether you're in Berlin or Tokyo.",
  },
  {
    title: "Need Help?",
    icon: <Mail className="text-red-500" size={32} />,
    content: "Reach out any time via support@techblog.dev — we respond fast, because respect goes both ways.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <motion.div
          className="md:col-span-2 space-y-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🔐 Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            This blog is built for developers, by developers. We know how valuable your data is — that’s why we keep things transparent. Below is a breakdown of how we handle your information.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {infoSections.map(({ title, icon, content }, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                // transition={{ delay: 0.3 + idx * 0.2, duration: 0.6 }}
              >
                <div className="mb-3">{icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">{content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Section — Tips or Sidebar */}
        <motion.aside
          className="bg-gray-100 rounded-xl p-6 h-fit border border-gray-200 shadow-sm"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">📌 Quick Notes</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm">
            <li>No ads. Ever.</li>
            <li>We never sell data.</li>
            <li>Only store what we must.</li>
            <li>Export or delete your account anytime.</li>
            <li>Code of Conduct: Respect  Revenue.</li>
          </ul>
        </motion.aside>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

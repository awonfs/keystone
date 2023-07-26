import React from "react";
import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full border-t transition-colors fixed inset-x-0 bottom-0">
      <div className="flex flex-col gap-1 justify-evenly items-center py-6">
        <div>
          <h4 className="text-lg font-bold">Socials</h4>
        </div>
        <div className="space-x-4">
          <a
            href="https://github.com/yourgithubusername"
            target="_blank"
            rel="noreferrer"
          >
            <Github size="24px" className="inline-block align-text-bottom" />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedinusername"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size="24px" className="inline-block align-text-bottom" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

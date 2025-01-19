import SocialMedia from "./social-media";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="text-center space-y-4">
        <p className="text-muted-foreground">
          Feel free to get in touch. Let's create something together.
        </p>
        <p className="text-lg">kunaljain209@gmail.com</p>
        <SocialMedia />
      </div>
    </footer>
  );
}

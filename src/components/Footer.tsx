const Footer = () => {
  return (
    <footer className="bg-primary py-6 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-primary-foreground/70 text-sm sm:text-base">
          © {new Date().getFullYear()} Tarek Ahammed Arman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  let currentYear = 0;
  const date = new Date();
  currentYear = date.getFullYear()

  return (
    <footer className="w-full text-center py-3 bg-background-dark">
      <h6>Developed by Alex Coronell - {currentYear}</h6>
    </footer>
    );
};

export default Footer;

import CardNav from "./navbar";

const Lap = () => {
  const items = [
    {
      label: "About",
      bgColor: "#f5f5f5",
      textColor: "#170D27",
      links: [
        { label: "Company", ariaLabel: "About Company", href:"/case-study" },
        { label: "Careers", ariaLabel: "About Careers",href:"/case-study" },
       
      ]
    },
    {
      label: "Projects", 
       bgColor: "#f5f5f5",
      textColor: "#170D27",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" ,href:"/case-study"},
        { label: "Case Studies", ariaLabel: "Project Case Studies" ,href:"/case-study"},
        
      ]
    },
    {
      label: "Contact",
      bgColor: "#f5f5f5", 
      textColor: "#170D27",
      links: [
        { label: "Email", ariaLabel: "Email us",href:"/case-study" },
        { label: "Twitter", ariaLabel: "Twitter" ,href:"/case-study"},
        { label: "LinkedIn", ariaLabel: "LinkedIn",href:"/case-study" },
       
      ]
    }
  ];

  return (
    <CardNav
      
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );


};
export default Lap
import React from "react";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import Navlink from "../../components/Navlink";

const Header = () => {
  return (
    <header className="w-full sticky top-0 left-0 right-0 flex justify-start items-center p-4 gap-4">
      <div>
        <Logo />
      </div>
      <div className="w-full nav flexbox-bc border">
        <Navlink />
        <div className="support">
          <Button type="primary">Login</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

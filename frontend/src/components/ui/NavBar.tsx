import { Link } from "react-router-dom";
import { Container } from "./Container";
import { Flex } from "./Flex";

import { HStack } from "./HStack";
import { Button } from "./button";
import { PlusSquareIcon } from "lucide-react";

import DarkModeToggle from "./ModeToggle";
import { useTheme } from "@/context/ThemeContext";

function NavBar() {
  const { useColorModeValue } = useTheme();
  const bgColor = useColorModeValue("bg-slate-800", "bg-gray-600");
  return (
    <Container className={`min-h-10 ${bgColor}`}>
      <Flex
        className="  md:flex-row"
        align="center"
        justify="between"
        direction="column"
      >
        <text className="bg-gradient-to-r from-cyan-400 to-blue-500 uppercase text-center text-xl sm:text-3xl">
          <Link to={"/"}>Product Store 🛒</Link>
        </text>
        <HStack>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon className="text-xl" />
            </Button>
          </Link>

          <DarkModeToggle />
        </HStack>
      </Flex>
    </Container>
  );
}

export default NavBar;

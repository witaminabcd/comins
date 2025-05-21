import SliderManager from "../../components/slider/SliderManager";
// import Tabs from "../../components/tabs/Tabs";
// import ModalManager from "../../components/modal/ModalManager";
// import DropdownMenuManager from "../../components/dropdown/DropdownMenuManager";
import ButtonTop from "../../components/button-top/ButtonTop";


class App {
  constructor() {
    this.init();
  }

  init() {
    new SliderManager();
    // new Tabs();
    // new ModalManager();
    // new DropdownMenuManager();
    new ButtonTop('.j-scroll-top', 200);
  }
}

export default App;

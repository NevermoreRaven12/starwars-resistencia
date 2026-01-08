import { ScrollText, Backpack, Zap, NotebookText, Plus, Minus, CircleAlert } from "lucide-react-native";
import D4 from '../../assets/icons/ui/dice/d4.svg'
import D6 from "../../assets/icons/ui/dice/d6.svg"
import D8 from "../../assets/icons/ui/dice/d8.svg"
import D10 from "../../assets/icons/ui/dice/d10.svg"
import D12 from "../../assets/icons/ui/dice/d12.svg"
import D20 from "../../assets/icons/ui/dice/d20.svg"
import Lightsaber from "../../assets/icons/ui/components/lightsaber.svg"
import Misc from "../../assets/icons/ui/components/bag.svg"
import Usable from "../../assets/icons/ui/components/potion.svg"

export const Icons = {
    Char: ScrollText,
    Inventory: Backpack,
    ST: Zap,
    Diary: NotebookText,
    Add: Plus,
    Remove: Minus,
    QuestItem: CircleAlert,
    d4: D4,
    d6: D6,
    d8: D8,
    d10: D10,
    d12: D12,
    d20: D20,
    armor: require("../../assets/icons/ui/components/armor.png"),
    blaster: require("../../assets/icons/ui/components/Blaster.png"),
    weapon: Lightsaber,
    misc: Misc,
    usable: Usable
}
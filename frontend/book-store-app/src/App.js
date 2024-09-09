import "./App.css";
import Header from "./components/Header";
import ShoppingArea from "./components/ShoppingArea";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";

function App() {
    return (
        <div>
            <UserProvider>
                <CartProvider>
                    <Header />
                    <ShoppingArea />
                </CartProvider>
            </UserProvider>
        </div>
    );
}

export default App;

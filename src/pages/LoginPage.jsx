import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = ({ setIsAuth }) => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    async function logine(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://192.168.0.193:5000/api/auth/login", {
                phone_number: phone,
                password: password
            });
            console.log(res.data);
            localStorage.setItem("auth", true);
            setIsAuth(true);
            navigate("/home");
        } catch (err) {
            console.log(err);
            toast.error("Login yoki parol xato");
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <ToastContainer position="top-center" />
            <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden max-w-4xl w-full">

                <form
                    onSubmit={logine}
                    className="w-full md:w-1/2 p-8 flex flex-col gap-6 justify-center"
                >
                    <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
                        Login
                    </h1>

                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400 transition"
                        type="text"
                        placeholder="Telefon raqam"
                    />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400 transition"
                        type="password"
                        placeholder="Parol"
                    />

                    <button
                        type="submit"
                        className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg p-3 transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        disabled={loading}
                    >
                        {loading ? "Yuklanmoqda..." : "Login"}
                    </button>
                </form>


                <div className="hidden md:block md:w-1/2">
                    <img
                        className="w-full h-full object-cover"
                        src="https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?w=500&auto=format&fit=crop&q=60"
                        alt="login"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

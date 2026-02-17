import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const addCar = ({ name, price, number }) => {

        setLoading(true);

        setTimeout(() => {
            const newCar = {
                id: Date.now(),
                name: name || "Noma’lum",
                price: price || "0",
                number: number || "Raqam yo‘q",
                createdAt: new Date(),
                sold: false,
            };

            setCars(prev => [...prev, newCar]);
            setLoading(false);

        }, 2000);
    };

    const toggleSold = (id) => {
        setCars(prev =>
            prev.map(car =>
                car.id === id ? { ...car, sold: !car.sold } : car
            )
        );
    };

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                openModal,
                closeModal,
                cars,
                addCar,
                toggleSold,
                loading,
                setLoading
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);



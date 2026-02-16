import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);


    const [cars, setCars] = useState([]);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);


    const addCar = ({ name, price, number }) => {
        const newCar = {
            id: Date.now(),
            name: name || "Noma’lum",
            price: price || "0",
            number: number || "Raqam yo‘q",
            createdAt: new Date(),
            sold: false,
        };
        setCars(prev => [...prev, newCar]);
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
                toggleSold
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};


export const useModal = () => useContext(ModalContext);


import React from "react";
import {
    useNavigate
} from "react-router-dom";
import Header from "../../components/Header_user";

function PaymentProcess() {
    var link = "https://en.wikipedia.org";

    return (
        <>
            <base href="./" />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <Header />

            <div className="relative flex h-screen font-[sans-serif]" id="paymentForm">
                <div className="m-auto">
                    <div className="bg-white border-2 rounded-lg drop-shadow-lg w-90">
                        <div className="p-4">
                            {/* Account ID */}
                            <div className="flex">
                                <div className="w-1/5">
                                    <p className="mb-5">Account ID:</p>
                                </div>
                                <div className="w-4/5">
                                    <p className="mb-5 font-bold text-right" id="accountId">
                                        {/* Account ID goes here */} 111
                                    </p> 
                                </div>
                            </div>
                            {/* Course */}
                            <div className="flex">
                                <div className="w-1/5">
                                    <p className="mb-5">Khóa học:</p>
                                </div>
                                <div className="w-4/5">
                                    <p className="mb-5 font-bold text-right" id="courseId">
                                    {/* Course ID goes here */} 222
                                    </p>
                                </div>
                            </div>
                            <hr />
                            {/* Cost? */}
                            <div className="flex">
                                <div className="w-1/5">
                                    <p className="mt-5">Giá Tiền:</p>
                                </div>
                                <div className="w-4/5">
                                    <p className="mt-5 text-orange-400 text-3xl font-bold text-right">
                                        300000đ
                                    </p>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="text-black bg-orange-400 hover:bg-orange-600 hover:text-white hover:border-white hover:fill-white border-2 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded w-full h-10 py-1 text-center mt-8"
                                onClick = {() => {
                                    addOrder();
                                    checkoutOrder();
                                }}
                                // onClick = {(e) => {
                                //     e.preventDefault();
                                //     link = "https://en.wikipedia.org"
                                //     window.location.href = link;
                                //     }}
                            >
                                <span className=" ml-1 align-middle inline-block">Thanh Toán</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-auto">
                <footer className="bg-white">
                    <br />
                    <hr />
                    <br />
                    <div>HealtExpert © 2024</div>
                </footer>
            </div>
        </>
    );
};

function addOrder() {
    var courseId = document.getElementById("courseId").innerHTML;
    var accountId = document.getElementById("accountId").innerHTML;

    var orderDTO = {
        courseId: courseId,
        accountId: accountId
    };

    fetch('https://localhost:7158/api/Order/AddOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDTO)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText = JSON.stringify(data);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("result").innerText = 'Error: ' + error;
    });
}

function checkoutOrder() {
    fetch('https://localhost:7158/api/Order/CheckoutOrder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => {
        window.location.href = data; // Redirect to the payment URL
        console.log(data)
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("result").innerText = 'Error: ' + error;
    });
}

export default PaymentProcess;
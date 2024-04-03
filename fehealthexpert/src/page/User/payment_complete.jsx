import React from "react";
import { useEffect } from "react";
import {
    useNavigate
} from "react-router-dom";
import Header from "../../components/Header_user";

function PaymentComplete() {
    const navigate = useNavigate()

    // useEffect(() => {
    //   setTimeout(() => {
    //     navigate('/home')
    //   }, 5000)
    // }, [])

    return (
        <>
            <base href="./" />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <Header />

            <div className="relative flex h-screen font-[sans-serif]" id="paymentForm">
                <div className="m-auto">
                    <div className="bg-white border-2 rounded-lg drop-shadow-lg w-96">
                        <div className="p-4">
                            {/* Amount */}
                            <div className="flex">
                                <div className="w-2/5">
                                    <p className="mb-2">Giá tiền:</p>
                                </div>
                                <div className="w-3/5">
                                    <p className="mb-2 font-bold text-right">
                                        3.000.000.000
                                    </p>
                                </div>
                            </div>
                            {/* Bank Code */}
                            <div className="flex">
                                <div className="w-2/5">
                                    <p className="mb-2">Mã ngân hàng:</p>
                                </div>
                                <div className="w-3/5">
                                    <p className="mb-2 font-bold text-right">
                                        VCB
                                    </p>
                                </div>
                            </div>
                            {/* Transaction Number */}
                            <div className="flex">
                                <div className="w-2/5">
                                    <p className="mb-2">Số giao dịch:</p>
                                </div>
                                <div className="w-3/5">
                                    <p className="mb-2 font-bold text-right">
                                        lkajdlsan
                                    </p>
                                </div>
                            </div>
                            {/* Card Type */}
                            <div className="flex">
                                <div className="w-2/5">
                                    <p className="mb-2">Loại thẻ:</p>
                                </div>
                                <div className="w-3/5">
                                    <p className="mb-2 font-bold text-right">
                                        ATM
                                    </p>
                                </div>
                            </div>
                            {/* Order Info */}
                            <div className="flex">
                                <div className="w-2/6">
                                    <p className="mb-2">Thông tin đơn hàng:</p>
                                </div>
                                <div className="w-4/6">
                                    <p className="mb-2 font-bold text-right">
                                        Order #516 for Sir. Lancelot for the fitness course
                                    </p>
                                </div>
                            </div>
                            {/* Date */}
                            <div className="flex">
                                <div className="w-2/5">
                                    <p className="mb-2">Thời gian:</p>
                                </div>
                                <div className="w-3/5">
                                    <p className="mb-2 font-bold text-right">
                                        6/9/2069
                                    </p>
                                </div>
                            </div>
                            {/* Success */}
                            <div className="">
                                    <p className="text-center text-orange-400 font-bold">
                                        Thanh toán thành công!
                                    </p>
                            </div>
                            {/* Button */}
                            <button
                                type="button"
                                className="text-black bg-orange-400 hover:bg-orange-600 hover:text-white hover:border-white hover:fill-white border-2 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded w-full h-10 py-1 text-center mt-8"

                            >
                                <span className="align-middle inline-block">Về Trang Khóa Học</span>
                            </button>
                            {/* Redirect 
                            <div className="">
                                    <p className="text-center text-orange-400 font-bold">
                                        Bạn sẽ được chuyển hướng ngay
                                    </p>
                            </div>*/}
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

export default PaymentComplete;
import React, { useState } from "react";
import { Form, Input, DatePicker, message } from "antd";

const { TextArea } = Input;

const ModalAddNutrition = (sessionId) => {
    const [nutriId, setNutriId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDecription] = useState("");
    const isActive = useState(true);
    const onFinish = (values) => {
        console.log("Success:", values);
        // Set sessionDTO with form values

    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form

            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="w-[90%] items-center relative h-[580px] rounded-2xl bg-white mx-auto"
        >
            <h1 className="text-center text-3xl mb-5 text-orange-400"><strong>Thêm chế độ dinh dưỡng</strong></h1>
            <hr />
            <div className="w-[98%] h-[480px] text-orange-400 text-lg flex absolute top-[300px] rounded-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto ">
                <div className="w-full ml-4 mt-5 mr-4">
                    <div className="mb-2">
                        <p><strong>ID chế độ dinh dưỡng</strong></p>
                    </div>

                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập ID chế độ dinh dưỡng",
                            },
                        ]}
                        name="nutriId"
                    >
                        <Input onChange={(e) => setNutriId(e.target.value)} type="text" className="w-1/2 py-2"
                            placeholder="Ví dụ: MN-YG01"></Input>
                    </Form.Item>

                    <div className="mb-2">
                        <p><strong>Tên chế độ dinh dưỡng</strong></p>
                    </div>
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập Tên chế độ dinh dưỡng",
                            },
                        ]}
                        name="title"
                    >
                        <Input onChange={(e) => setTitle(e.target.value)} type="text" className="w-1/2 py-2"
                            placeholder="Ví dụ: Thực đơn cho buổi tập đầu tiên"></Input>
                    </Form.Item>

                    <div className="mb-2">
                        <p><strong>Mô tả chế độ dinh dưỡng</strong></p>
                    </div>
                    <Form.Item
                        rules={[
                            {
                                required: false,
                            },
                        ]}
                        name="description"
                    >
                        <>
                            <br />
                            <TextArea
                                onChange={(e) => setDecription(e.target.value)}
                                className="w-full"
                                rows={4}
                                placeholder="Hãy viết mô tả Tên chế độ dinh dưỡng của bạn nhé"
                                maxLength={255}
                            />
                        </>
                    </Form.Item>
                </div>
            </div>
            <button
                type="submit"
                //onClick={AddNutrition}
                className="w-[250px] mr-[90px] rounded-md absolute bottom-0 right-3 bg-orange-400 hover:bg-black text-white font-bold py-3 px-4 rounded opacity-100 hover:opacity-80 transition-opacity mt-3 "
            >
                Thêm
            </button>
        </Form >
    );
};

export default ModalAddNutrition;

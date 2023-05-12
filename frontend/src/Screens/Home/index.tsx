import React, {
    type FC,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { io } from "socket.io-client";
let i = 9999;

const socket = io("http://localhost:3000");
socket.connect();

interface HomeProps {}
interface Message {
    id: string;
    content: string;
    fromMe?: boolean;
}

const Home: FC<HomeProps> = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        socket.open();
        socket.on("response", ({ id, content }: Message) => {
            setMessages((curr) => {
                const doesMessageExist = curr.find(
                    (message) => message.id === id
                );
                if (doesMessageExist) {
                    return curr.map((currentMsg) => {
                        if (id === currentMsg.id) {
                            return {
                                ...currentMsg,
                                content: currentMsg.content + content,
                            };
                        }

                        return currentMsg;
                    });
                }

                return [...curr, { id, content, fromMe: false }];
            });
        });

        return () => {
            socket.disconnect();
            socket.close();
            socket.off("response");
        };
    }, []);

    useLayoutEffect(() => {
        inputRef.current?.focus();
    }, []);

    const sendMessage = () => {
        if (inputRef.current) {
            const value = inputRef.current?.value;
            inputRef.current.value = "";
            if (value) {
                socket.emit("message", { data: value });
                setMessages((curr) => [
                    ...curr,
                    { content: value, id: i.toString(), fromMe: true },
                ]);
                i++;
            }
        }
    };

    return (
        <div className="h-screen w-full flex flex-col">
            <div
                className="flex-1 w-full py-4 overflow-y-auto px-3"
                style={{ height: "calc(100vh - 56px)" }}
            >
                <div className="flex flex-col justify-end gap-4">
                    {messages.map(({ id, content, fromMe }) => (
                        <div
                            key={id}
                            className={`${
                                fromMe
                                    ? "self-end bg-green-400 rounded-br-none"
                                    : "self-start bg-blue-400 rounded-bl-none"
                            } px-2 py-1 rounded-md `}
                        >
                            {content}
                        </div>
                    ))}
                </div>
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    sendMessage();
                }}
                className="w-full flex gap-4 px-3 pb-3"
            >
                <input
                    ref={inputRef}
                    className="flex-1 h-14 text-4xl border rounded-lg border-blue-500"
                />{" "}
                <button
                    className="h-14 text-2xl bg-blue-500 px-4 rounded-lg text-white"
                    type="submit"
                >
                    {" "}
                    Send{" "}
                </button>
            </form>
        </div>
    );
};

export default Home;

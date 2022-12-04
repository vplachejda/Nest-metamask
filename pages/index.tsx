import { useMetaMask } from "metamask-react";

function MetaMaskTemplate() {
    const { status, connect, account, chainId } = useMetaMask();

    if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

    if (status === "unavailable") return <div>MetaMask not available :(</div>

    if (status === "notConnected") return (
        <button
            className="w-fit h-fit border-none text-white py-[15px] px-[32px] text-center inline-block font-[16px] bg-[#037dd6] cursor-pointer"
            onClick={connect}
        >Connect to Metamask</button>
    )

    if (status === "connecting") return <div>Connecting...</div>

    if (status === "connected") return (
        <>
            <div>Connected account {account} on chain ID {chainId}</div>
        </>
    )

    return null;
}

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <div>
                <MetaMaskTemplate />
            </div>
        </div>
    );
}
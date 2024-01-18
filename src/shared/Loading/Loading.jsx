const Loading = () => {
    return (
        <div className="min-h-screen items-center justify-center w-full flex flex-col gap-4">
            <div>
                <div className="flex gap-4 items-center w-96">
                    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                    <div className="flex flex-col gap-4">
                        <div className="skeleton h-4 w-20"></div>
                        <div className="skeleton h-4 w-28"></div>
                    </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
            </div>
        </div>
    );
};

export default Loading;
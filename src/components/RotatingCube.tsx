export default function RotatingCube() {
    return (
        <div className=" w-[300px] h-[300px] perspective-[800px] z-[3]
    absolute top-[100px] left-[20px]
    sm:w-[400px] sm:h-[400px] sm:left-[60px]
    md:w-[500px] md:h-[500px] md:left-[100px]
    xl:w-[600px] xl:h-[600px] xl:left-[200px]
">
            <div className="w-full h-full relative [transform-style:preserve-3d] animate-rotate">
                <div
                    className="cube-face cube-face-front frontFace
                    xl:cube-face-front-xl
                    lg:cube-face-front-lg
                    md:cube-face-front-md">
                    <video autoPlay loop muted playsInline>
                        <source src="https://construct-static.com/videos/v1481/construct3/tnp.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div
                    className="cube-face cube-face-back backFace
                    xl:cube-face-back-xl
                    lg:cube-face-back-lg
                    md:cube-face-back-md">
                    <video autoPlay loop muted playsInline>
                        <source src="https://construct-static.com/videos/v1481/construct3/goose.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div
                    className="cube-face cube-face-right rightFace
                    xl:cube-face-right-xl
                    lg:cube-face-right-lg
                    md:cube-face-right-md">
                    <video autoPlay loop muted playsInline>
                        <source src="https://construct-static.com/videos/v1481/homepage/boss.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div
                    className="cube-face cube-face-left leftFace
                    xl:cube-face-left-xl
                    lg:cube-face-left-lg
                    md:cube-face-left-md">
                    <video autoPlay loop muted playsInline>
                        <source src="https://construct-static.com/videos/v1481/homepage/kiwi-edit.mp4"
                                type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    );
}
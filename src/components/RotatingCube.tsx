// ✅ Ось фінальна версія компонента:
export default function RotatingCube() {
    return (
        <div className="scene">
            <div className="cube">
                <div className="cube__face cube__face--front">
                    <video autoPlay loop muted playsInline>
                        <source src="https://construct-static.com/videos/v1481/construct3/tnp.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="cube__face cube__face--back">
                    <video autoPlay loop muted playsInline>
                        <source src="https://construct-static.com/videos/v1481/construct3/goose.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="cube__face cube__face--right">
                    <video autoPlay loop muted playsInline>
                        <source src="https://construct-static.com/videos/v1481/homepage/boss.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="cube__face cube__face--left">
                    <video autoPlay loop muted playsInline>
                        <source src="https://construct-static.com/videos/v1481/homepage/kiwi-edit.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}
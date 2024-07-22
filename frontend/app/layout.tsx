import "@styles/globals.css";
import Image from "next/image";

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body>
				<div id="root">
					<div className="text-center w-full flex justify-center mt-16">
						<h1 className="flex flex-row  items-center justify-between">
							<span className="text-8xl font-bold">TODO&nbsp;</span>
							<span>
								<Image
									src={"/ts-logo-128.svg"}
									alt="type script logo"
									width={128}
									height={128}
								/>
							</span>
						</h1>
					</div>
					{children}
				</div>
			</body>
		</html>
	);
}

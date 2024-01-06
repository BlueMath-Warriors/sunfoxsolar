import {
	Container,
	FragmentContentWrapper,
	FragmentTitle,
	FragmentWrapper,
	LeftContainer,
} from "./network.style";
import { Button } from "../../../../../components/button/button";
import Image from "next/image";

export const NetworkFragment = ({stringsObj}) => {

	return (
		<Container>
			<FragmentWrapper>
				<FragmentContentWrapper>
					<LeftContainer>
						<FragmentTitle>
							{stringsObj.association_block_heading}
						</FragmentTitle>
						<label>
							{stringsObj.association_block_body}
						</label>
						<div>
							<Button
								caption={
									"Learn More About The Sunfox Solar Developer Network"
								}
								height={56}
								width={"calc(100% - 80px)"}
								onClick={() => {
									window.open(
										"https://blog.sunfoxsolar.net/developers",
										"_self"
									);
								}}
								rightIcon={
									<Image src={"/imgs/arrow-right-white.svg"} alt="arrow" width={20} height={23} />
								}
								style={{
									fontSize: 20,
									justifyContent: "space-between",
									padding: "0 40px",
									marginTop: 50,
									maxWidth: 600,
								}}
							/>
							<Button
								caption={"Learn More"}
								height={56}
								width={"calc(100% - 80px)"}
								onClick={() => {
									window.open(
										"https://blog.sunfoxsolar.net/developers",
										"_self"
									);
								}}
								rightIcon={
									<Image src={"/imgs/arrow-right-white.svg"} alt="arrow" width={20} height={23} />
								}
								style={{
									fontSize: 20,
									justifyContent: "space-between",
									padding: "0 40px",
									marginTop: 50,
									maxWidth: 600,
								}}
							/>
						</div>
						<Image src={"/imgs/person.webp"} alt="person" width={648} height={500} />
					</LeftContainer>
				</FragmentContentWrapper>
			</FragmentWrapper>
		</Container>
	);
};

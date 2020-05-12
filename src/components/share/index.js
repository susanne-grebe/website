import React from 'react'
import styled from "@emotion/styled"
import {
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	RedditShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	EmailIcon,
	FacebookIcon,
	LinkedinIcon,
	RedditIcon,
	TelegramIcon,
	TwitterIcon,
	WhatsappIcon,
} from "react-share";

import SectionHeader from '../section-header'

const Section = styled.section`
  position: relative;
  padding-top: 0;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 1025px) {
    padding-bottom: 6rem;
  }
`

const SectionInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Share = ({ data, lang }) => {

	return (
		<Section>
			<SectionHeader title={lang === 'de' ? `Diesen Beitrag auf Social Media veröffentlichen` : `Share This Post On Social Media`} />
			<SectionInner>
				<FacebookShareButton url={data.url} >
					<FacebookIcon size={32} round={false} />
				</FacebookShareButton>
				<LinkedinShareButton url={data.url} >
					<LinkedinIcon size={32} round={false} />
				</LinkedinShareButton>
				<RedditShareButton url={data.url}>
					<RedditIcon size={32} round={false} />
				</RedditShareButton>
				<TelegramShareButton url={data.url}>
					<TelegramIcon size={32} round={false} />
				</TelegramShareButton>
				<TwitterShareButton url={data.url}>
					<TwitterIcon size={32} round={false} />
				</TwitterShareButton>
				<WhatsappShareButton url={data.url}>
					<WhatsappIcon size={32} round={false} />
				</WhatsappShareButton>
				<EmailShareButton url={data.url}>
					<EmailIcon size={32} round={false} />
				</EmailShareButton>
			</SectionInner>
		</Section>
	)
}

export default Share
import { differenceInDays, formatDistanceToNow, isMatch, parse, } from "date-fns";
import styled from "styled-components";



export default function DatesFormat( { created, updated } ) {
		const relativeStartDate = parse( created, "yyyy-MM-dd", new Date() );
		const relativeUpdatedDate = parse( updated, "yyyy-MM-dd", new Date() );

		const dateDifference = differenceInDays(
				relativeUpdatedDate,
				relativeStartDate
		);

		if ( dateDifference < 3 ) {
				return (
						<StyledDates >
								<span >
										Planted <RelativeDate postDate = {updated} />
								</span >
						</StyledDates >
				);
		} else {
				return (
						<StyledDates >
								{created && (
										<span >
												Planted <RelativeDate postDate = {created} />
										</span >
								)}
								{updated && (
										<span >
												Last tended <RelativeDate postDate = {updated} />
										</span >
								)}
						</StyledDates >
				);
		}
}

const StyledDates = styled.div`
  margin-top: var(--space-xs);
  display: flex;
  flex-direction: column;
  text-align: left;

  span {
    display: inline-block;
    font-family: var(--font-sans);
    font-size: var(--font-size-xs);
    color: var(--color-gray-600);
    letter-spacing: 0.01em;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    margin-top: var(--space-2xs);
    text-align: left;
  }
`;


export function RelativeDate( { postDate } ) {
		if ( isMatch( postDate, "yyyy-MM-dd" ) ) {
				const date = parse( postDate, "yyyy-MM-dd", new Date() );
				const relativeDate = formatDistanceToNow( date, {
						addSuffix: true,
				} );
				return relativeDate;
		}
}

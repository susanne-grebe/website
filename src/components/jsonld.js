import React from "react"
import Helmet from "react-helmet"

export function JsonLd({ data }) {
  const {
    seoCompanyCity,
    seoCompanyDescription,
    seoCompanyEmail,
    seoCompanyImage,
    seoCompanyLogo,
    seoCompanyName,
    seoCompanyOpenTimeFriday,
    seoCompanyOpenTimeMonday,
    seoCompanyOpenTimeThursday,
    seoCompanyOpenTimeTuesday,
    seoCompanyOpenTimeWednesday,
    seoCompanyOpenTimeSaturday,
    seoCompanyOpenTimeSunday,
    seoCompanyPostalcode,
    seoCompanyPriceRange,
    seoCompanyService1Description,
    seoCompanyService1Name,
    seoCompanyService2Description,
    seoCompanyService2Name,
    seoCompanyService3Description,
    seoCompanyService3Name,
    seoCompanyState,
    seoCompanyStreetAddress,
    seoCompanyTelephone,
    seoUrl,
  } = data

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          url: seoUrl ? seoUrl : "",
          "@id": "#susanne-grebe",
          name: seoCompanyName ? seoCompanyName : "",
          description: seoCompanyDescription ? seoCompanyDescription : "",
          telephone: seoCompanyTelephone ? seoCompanyTelephone : "",
          email: seoCompanyEmail ? seoCompanyEmail : "",
          address: {
            "@type": "PostalAddress",
            streetAddress: seoCompanyStreetAddress
              ? seoCompanyStreetAddress
              : "",
            addressLocality: seoCompanyCity ? seoCompanyCity : "",
            addressRegion: seoCompanyState ? seoCompanyState : "",
            postalCode: seoCompanyPostalcode ? seoCompanyPostalcode : "",
          },
          image: seoCompanyImage.fluid.srcWebp
            ? seoCompanyImage.fluid.srcWebp
            : "",
          logo: seoCompanyLogo.fluid.srcWebp
            ? seoCompanyLogo.fluid.srcWebp
            : "",
          priceRange: seoCompanyPriceRange ? seoCompanyPriceRange : "",
          areaServed: {
            "@type": "AdministrativeArea",
            name: seoCompanyState ? seoCompanyState : "",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "16",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 50.8152091,
            longitude: 6.0533127,
          },
          openingHours: [
            `Montag ${
              seoCompanyOpenTimeMonday === "0"
                ? "Geschlossen"
                : seoCompanyOpenTimeMonday
            }`,
            `Dienstag: ${
              seoCompanyOpenTimeTuesday === "0"
                ? "Geschlossen"
                : seoCompanyOpenTimeTuesday
            }`,
            `Mittwoch: ${
              seoCompanyOpenTimeWednesday === "0"
                ? "Geschlossen"
                : seoCompanyOpenTimeWednesday
            }`,
            `Donnerstag: ${
              seoCompanyOpenTimeThursday === "0"
                ? "Geschlossen"
                : seoCompanyOpenTimeThursday
            }`,
            `Freitag: ${
              seoCompanyOpenTimeFriday === "0"
                ? "Geschlossen"
                : seoCompanyOpenTimeFriday
            }`,
            `Samstag: ${
              seoCompanyOpenTimeSaturday === "0"
                ? "Geschlossen"
                : seoCompanyOpenTimeSaturday
            }`,
            `Sonntag: ${
              seoCompanyOpenTimeSunday === "0"
                ? "Geschlossen"
                : seoCompanyOpenTimeSunday
            }`,
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Coaching, Mediation, Workshops",
            itemListElement: [
              {
                "@type": "ListItem",
                name: seoCompanyService1Name ? seoCompanyService1Name : "",
                Description: seoCompanyService1Description
                  ? seoCompanyService1Description
                  : "",
                url: "https://www.susanne-grebe.de/coaching",
              },
              {
                "@type": "ListItem",
                name: seoCompanyService2Name ? seoCompanyService2Name : "",
                Description: seoCompanyService2Description
                  ? seoCompanyService2Description
                  : "",
                url: "https://www.susanne-grebe.de/mediation",
              },
              {
                "@type": "ListItem",
                name: seoCompanyService3Name ? seoCompanyService3Name : "",
                Description: seoCompanyService3Description
                  ? seoCompanyService3Description
                  : "",
                url: "https://www.susanne-grebe.de/workshops",
              },
            ],
          },
        })}
      </script>
    </Helmet>
  )
}

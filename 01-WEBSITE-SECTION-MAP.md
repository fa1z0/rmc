# Website Section Map

The number is the permanent locator. If someone says “edit RMC-09”, everyone knows exactly where to look.

| Code | Visible area | index.html | styles.css | script.js | Normal editing note |
|---|---|---|---|---|---|
| RMC-01 | Header / Navigation | Yes | Yes | Yes | Menu content in HTML; appearance in CSS; mobile menu behaviour in JS |
| RMC-02 | Hero | Yes | Yes | Marker only | Main headline/buttons in HTML |
| RMC-03 | Statistics | Yes | Yes | Yes | Numbers/text in HTML; animation in JS |
| RMC-04 | Research Support Services | Yes | Yes | Marker only | Service cards in HTML |
| RMC-05 | Funding Opportunities | Yes | Yes | Yes | Grant cards in HTML; filters in JS |
| RMC-06 | Research Explorer | Yes | Yes | Yes | **Editable Research Explorer data is labelled RMC-06A in script.js** |
| RMC-07 | Research Impact | Yes | Yes | Marker only | Content in HTML |
| RMC-08 | Centres & Innovation Pipeline | Yes | Yes | Marker only | Content in HTML |
| RMC-09 | Global Research Network | Yes | Yes | Yes | **Partner records are labelled RMC-09B in script.js**; map engine is below |
| RMC-10 | Resources / News / Leadership | Yes | Yes | Marker only | Cards/content in HTML |
| RMC-11 | My RMC | Yes | Yes | Marker only | Content in HTML |
| RMC-12 | Ask RMC AI | Yes | Yes | Yes | Front-end chat in JS; server AI/API is in server.js |
| RMC-13 | Footer | Yes | Yes | Marker only | Footer content in HTML |
| RMC-14 | Responsive/mobile fixes | — | Yes | — | Same page order, but only mobile/tablet CSS |

## Backend files

These do not follow the webpage order because they do different jobs. **server.js** now uses B-00 to B-05 headings. Most website design/content work should not require editing server.js.

**admin.html** is the existing Ask RMC knowledge-document admin page. Its HTML, CSS and JavaScript have been reformatted and labelled ADMIN-A to ADMIN-D.

## Safe search examples

- Want Research Explorer? Search `RMC-06`.
- Want to edit the Research Explorer data? Search `RMC-06A`.
- Want international partners? Search `RMC-09B`.
- Want the chatbot front-end? Search `RMC-12`.
- Want the chatbot backend? Search `B-03`.

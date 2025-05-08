import React, { useState, useRef, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page } from "react-pdf";
import { GetCorporateProfile } from "../data/GetData";
import { useNavigate } from "react-router-dom";
import { getStrapiURL } from "../lib/utils";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFPage = React.forwardRef(({ pageNumber, width }, ref) => {
  return (
    <div ref={ref} style={{ width: `${width}px`, height: `${width * 1.5}px` }}>
      <Page pageNumber={pageNumber} width={width} />
    </div>
  );
});

const PDFFlipbook = () => {
  const { data, error, isPending } = GetCorporateProfile();
  const baseurl = getStrapiURL();
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const flipBookRef = useRef(null);
  const navigate = useNavigate();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Adjust width based on window size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the width for each page, ensuring two pages fit side by side without overflowing
  const calculatePageWidth = () => {
    if (width >= 1200) return width / 2 - 50; // Two pages on large screens
    if (width >= 768) return width / 2 - 40; // Smaller two-page view on tablets
    return width - 40; // Single page view on small screens
  };

  // Keyboard navigation event listener
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        // Flip to the next page
        if (flipBookRef.current) {
          flipBookRef.current.pageFlip().flipNext();
        }
      } else if (event.key === "ArrowLeft") {
        // Flip to the previous page
        if (flipBookRef.current) {
          flipBookRef.current.pageFlip().flipPrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (error) {
    navigate("/");
    return null;
  }

  if (isPending) return "Loading...";

  return (
    <Container fluid>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <a
          href={baseurl + data.CorporateProfile.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary">Download as PDF</Button>
        </a>
      </div>
      <Document
        file={baseurl + data.CorporateProfile.url}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {numPages && (
          <HTMLFlipBook
            ref={flipBookRef}
            width={calculatePageWidth() * 2} // Total width for two pages
            height={calculatePageWidth() * 1.5} // Maintain aspect ratio
            size="stretch" // Ensures that the size of the flipbook adapts to the container
            minWidth={315} // Minimum width for small devices
            maxWidth={1000}
            maxHeight={1536}
            drawShadow={true}
            flippingTime={1000}
            showCover={true}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <PDFPage
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={calculatePageWidth()}
              />
            ))}
          </HTMLFlipBook>
        )}
      </Document>
    </Container>
  );
};

export default PDFFlipbook;

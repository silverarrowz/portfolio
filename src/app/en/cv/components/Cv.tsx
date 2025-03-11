"use client";

import { useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
const Cv = () => {
  const [numPages, setNumPages] = useState<number>();
  const [scale, setScale] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  useEffect(() => {
    const updateScale = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 425) setScale(0.3);
      else if (screenWidth < 540) setScale(0.7);
      else if (screenWidth < 640) setScale(0.8);
      else if (screenWidth < 1024) setScale(1);
      else if (screenWidth < 1280) setScale(1.2);
      else setScale(1.4);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <Document
      className={"animate-fade-in-up opacity-0"}
      file={"/cv1.pdf"}
      onLoadSuccess={onDocumentLoadSuccess}
      externalLinkTarget="_blank"
    >
      {Array.from({ length: numPages! }, (_, i) => (
        <Page className={"mb-4"} key={i} scale={scale} pageNumber={i + 1} />
      ))}
    </Document>
  );
};

export default Cv;

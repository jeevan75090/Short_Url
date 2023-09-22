import { useState } from "react";

function ShortenForm() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState([]); // Store URL items
  const [error, setError] = useState("");

  const handleShorten = async () => {
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${originalUrl}`
      );
      const data = await response.json();

      if (data.ok) {
        setError("");
        setOriginalUrl(""); // Reset the input box

        // Create a new URL item and add it to the list
        const newUrlItem = {
          originalUrl,
          shortenedUrl: data.result.short_link,
          isCopied: false, // Initialize copied state
        };
        setShortenedUrls([...shortenedUrls, newUrlItem]);
      } else {
        setError("Error: Unable to shorten URL");
      }
    } catch (err) {
      setError("Error: Unable to shorten URL");
    }
  };

  const handleCopy = (index) => {
    const updatedUrls = [...shortenedUrls];
    const shortenedUrl = updatedUrls[index].shortenedUrl;

    navigator.clipboard.writeText(shortenedUrl).then(
      function () {
        console.log("Copied to clipboard:", shortenedUrl);
        // Update the copied state for the specific URL item
        updatedUrls[index].isCopied = true;
        setShortenedUrls(updatedUrls);
      },
      function (err) {
        console.error("Unable to copy to clipboard: ", err);
      }
    );
  };

  return (
    <div className="">
      <div className="input-form flex justify-center bg-[#4b406b] py-9 mx-10 rounded-md gap-5">
        <input
          className="input py-2 px-4 w-4/5 rounded-md text-start"
          type="text"
          placeholder="Shorten a link here..."
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />

        <button
          className="form-button bg-[#2ad1d2] px-6 py-2 rounded-lg text-white hover:bg-[#9be3e2]"
          onClick={handleShorten}
        >
          Shorten it!
        </button>
      </div>

      {/* Shortened URLs */}
      <div>
        {shortenedUrls.map((urlItem, index) => (
          <div
            key={index}
            className="shorten-form flex gap-5 justify-between items-center mx-10 my-5 bg-white py-4 px-6 rounded-lg"
          >
            <div className="original-url">
              <p className="">{urlItem.originalUrl}</p>
            </div>

            <div className="short-url flex gap-5 items-center">
              <span className="text-[#2cbbbb]">{urlItem.shortenedUrl}</span>
              <button
                onClick={() => handleCopy(index)}
                className={`px-6 py-1 rounded-lg text-white ${
                  urlItem.isCopied ? "bg-[#4b406b] cursor-default" : "bg-[#2ad1d2] hover:bg-[#9be3e2]"
                }`}
              >
                {urlItem.isCopied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
        {error && <p className="text-red-500 ml-20">{error}</p>}
      </div>
    </div>
  );
}

export default ShortenForm;

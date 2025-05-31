import React from "react";
import Image from "next/image";

const Card = ({ cardGIF, content }) => {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#c7d2fe] shadow-2xl rounded-2xl overflow-hidden border border-gray-200 flex flex-col items-center justify-center">
      {/* Lazy-loaded GIF */}
      <div className="w-full h-48 relative flex items-center justify-center">
        <div className="relative w-40 h-40">
          <Image
            src={cardGIF}
            alt="Card Image"
            layout="fill"
            objectFit="contain"
            className="rounded-t-2xl"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content below the image */}
      <div className="p-6 flex flex-col items-center justify-center w-full">
        <div className="w-full text-center">
          <div className="text-gray-900 text-lg font-semibold mb-2 tracking-wide leading-snug drop-shadow-sm">
            {/* Title slot if needed in future */}
          </div>
          <div className="prose prose-slate prose-lg max-w-none text-center mx-auto font-sans text-gray-700 font-medium leading-relaxed">
            {/* Style buttons inside content */}
            {typeof content === 'string' ? content :
              React.cloneElement(content, {},
                React.Children.map(content.props.children, child => {
                  if (React.isValidElement(child) && child.type === 'li') {
                    return React.cloneElement(child, {},
                      React.Children.map(child.props.children, subChild => {
                        if (React.isValidElement(subChild) && subChild.type === 'a') {
                          return React.cloneElement(subChild, {
                            className: (subChild.props.className || '') + ' custom-card-btn',
                            style: { background: '#121212', color: '#fff', borderRadius: '9999px', padding: '0.5rem 1.25rem', margin: '0.25rem 0', fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', transition: 'background 0.2s', display: 'inline-block' }
                          });
                        }
                        if (React.isValidElement(subChild) && subChild.type === 'button') {
                          return React.cloneElement(subChild, {
                            className: (subChild.props.className || '') + ' custom-card-btn',
                            style: { background: '#121212', color: '#fff', borderRadius: '9999px', padding: '0.5rem 1.25rem', margin: '0.25rem 0', fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', transition: 'background 0.2s', display: 'inline-block' }
                          });
                        }
                        return subChild;
                      })
                    );
                  }
                  return child;
                })
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

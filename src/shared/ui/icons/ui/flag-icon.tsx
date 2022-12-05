import React from 'react';
import { FC } from 'react';

export const FlagIcon: FC<{ className?: string }> = React.memo(
    ({ className }) => {
        return (
            <svg
                className={className}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.3822 15.7137L6 19.9425V4L18 4V19.9425L12.6178 15.7137L12 15.2283L11.3822 15.7137Z"
                    strokeWidth="2"
                />
            </svg>
        );
    }
);

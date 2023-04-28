import styles from './Breadcrumb.module.css';
import { clsx, separate } from "~@Services/classname";

type BreadcrumbProps = {
    items: Array<string>
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return(
        <nav aria-label={items.at(0)} className='text-gray-400 py-4'>
            <ol className='flex'>
                {items.map(function (item, index) {
                    return (
                        <li
                            key={index}
                            className={clsx(separate([
                                'text-lg cursor-pointer', styles.item
                            ]), {
                                'text-blue-500': index === (items.length - 1)
                            })}
                        >
                            {item}
                        </li>
                    );
                })}
            </ol>
        </nav>
    )
}

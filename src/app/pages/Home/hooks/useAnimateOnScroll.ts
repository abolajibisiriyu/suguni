import { useEffect, useRef } from "react";

interface Props {
  root?: string | React.RefObject<HTMLElement>;
  callback?: IntersectionObserverCallback;
  target: string;
}
export default function useAnimateOnScroll(props: Props) {
  const { callback, target } = props;

  const observer = useRef<IntersectionObserver>();

  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
    callback && callback(entries, observer);
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(onIntersect);
    const targets = document.querySelectorAll(target);

    targets.forEach((target) => {
      observer.current?.observe(target);
    });

    return () => {
      observer.current?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

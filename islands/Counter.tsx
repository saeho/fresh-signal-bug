import type { Signal } from "@preact/signals";
import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { Button } from "../components/Button.tsx";

const popOver = signal('');

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {

  const onMouseEnter = () => {
    popOver.value = 'Hello world';
  };

  useEffect(() => {
    return () => {
      if (popOver.value) {
        popOver.value = '';
      }
    };
  }, []);

  return (
    <div class="flex gap-8 py-6">
      <p onMouseEnter={onMouseEnter}>
        Mouse over me for signal
      </p>
      <p>
        {popOver.value}
      </p>
      <Button onClick={() => props.count.value -= 1}>-1</Button>
      <p class="text-3xl tabular-nums">{props.count}</p>
      <Button onClick={() => props.count.value += 1}>+1</Button>
    </div>
  );
}

export function InspectData({ data }: { data: unknown }) {
  return import.meta.env.DEV ? (
    <div className="bg-base-300 w-full">
      <div className="w-full">
        <details className="collapse collapse-arrow">
          <summary className="collapse-title font-semibold">
            inspect data
          </summary>
          <div className="collapse-content overflow-x-scroll text-sm">
            <pre className="">
              <code>{JSON.stringify(data, undefined, 2)}</code>
            </pre>
          </div>
        </details>
      </div>
    </div>
  ) : null;
}

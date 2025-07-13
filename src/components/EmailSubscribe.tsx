export function EmailSubscribe() {
  return (
    <div className="w-full bg-white py-8 px-6 rounded-lg shadow-sm shadow-base-300 border-base-100 ">
      {/* BEGIN: Constant Contact Bubble Opt-in Email List Form  */}
      <div>
        <form
          name="ccoptin"
          action="https://visitor.r20.constantcontact.com/d.jsp"
          target="_blank"
          method="post"
        >
          <h3 className="text-2xl text-primary-300 pb-4">
            Join Our Email List
          </h3>
          <label className="block " htmlFor="email">
            Email:
          </label>
          <div className="flex flex-col lg:flex-row gap-4 pb-4 pt-2">
            <input
              className="border border-base-300 rounded-sm px-4 py-2 outline-primary-300 grow shrink"
              id="email"
              type="email"
              name="ea"
              value=""
            />
            <input
              type="submit"
              name="go"
              value="Join"
              className="submit text-md px-6 py-2 rounded-sm bg-primary-300"
            />
            <input type="hidden" name="llr" value="nfon6tjab" />
            <input type="hidden" name="m" value="1109843687597" />
            <input type="hidden" name="p" value="oi" />
          </div>
        </form>
      </div>
      {/*  END: Constant Contact Bubble Opt-in Email List Form */}

      {/* BEGIN: SafeSubscribe */}
      <div>
        <img
          src="https://imgssl.constantcontact.com/ui/images1/safe_subscribe_logo.gif"
          width="168"
          height="14"
          alt=""
        />
      </div>
      {/* END: SafeSubscribe */}
    </div>
  );
}

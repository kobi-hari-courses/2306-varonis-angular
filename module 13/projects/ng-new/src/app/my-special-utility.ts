import { InjectionToken, Injector, inject, runInInjectionContext } from "@angular/core";

const KEY_TOKEN = new InjectionToken<string>('KEY');

export function doSomethingAmazing(key: string) {
    const parent = inject(Injector);

    const injector = Injector.create({
        providers: [
            {provide: KEY_TOKEN, useValue: key}
        ], 
        parent: parent
    })

    runInInjectionContext(injector, () => doPartialJob());
}

function doPartialJob() {
    doSomethingVeryMinimal();
}

function doSomethingVeryMinimal() {
    doSomethingAtomic()

}

async function doSomethingAtomic() {
    const key = inject(KEY_TOKEN);
    const value = await Promise.resolve(42);
    localStorage.setItem(key, value.toString());

}
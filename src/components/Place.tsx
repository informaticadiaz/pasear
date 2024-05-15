import Abc from './assets/Abc';
import Start from './assets/Start';
import { getPlace } from '../api/data';
import { tabsList, buyDetails } from '../data/Data';
import { useParams } from 'react-router-dom';
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';

export default function Place() {
  const { id } = useParams();
  const place = getPlace(id);
  if (!place) {
    return <div>Lugar no encontrado</div>;
  }
  const { name, tittle, image, description } = place;

  return (
    <div className="text-t-light dark:bg-dark dark:text-t-dark">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 dark:bg-dark">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="flex flex-col-reverse">
            <TabGroup>
              {/* Tab panel */}
              <TabPanels>
                {tabsList.map((tab, index) => (
                  <TabPanel key={index} className="p-4">
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full rounded-lg object-cover object-center"
                    />
                  </TabPanel>
                ))}
              </TabPanels>
              {/* Tabs list */}
              <div className="mx-autohidden mt-6 w-full max-w-2xl sm:block lg:max-w-none">
                <TabList className="grid grid-cols-4 gap-6 px-4 pb-8">
                  {tabsList.map((tab, index) => (
                    <Tab
                      key={index}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md text-sm font-medium uppercase data-[selected]:bg-white">
                      <span className="sr-only">{name}</span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <img
                          src={image}
                          alt=""
                          className="h-full w-full rounded-lg object-cover object-center p-1"
                        />
                      </span>
                      <span className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-transparent ring-offset-2"></span>
                    </Tab>
                  ))}
                </TabList>
              </div>
            </TabGroup>
          </div>
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1>{name}</h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
            </div>
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  <Start className={'h-5 w-5 flex-shrink-0 text-indigo-500'} />
                  <Start className={'h-5 w-5 flex-shrink-0 text-indigo-500'} />
                  <Start className={'h-5 w-5 flex-shrink-0 text-indigo-500'} />
                  <Start className={'h-5 w-5 flex-shrink-0 text-indigo-500'} />
                  <Start className={'h-5 w-5 flex-shrink-0 text-gray-300'} />
                </div>
                <p className="sr-only">"4" " outof 5 stars"</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base">
                <p>{description}</p>
              </div>
            </div>
            <form className="mt-6">
              <div>
                <h3 className="text-sm">Color</h3>
                {/* HedlessUI */}
              </div>
              <div className="mt-10 flex">
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium sm:w-full dark:bg-btn-dark">
                  Add to bag
                </button>
                <button
                  type="submit"
                  className="ml-4 flex items-center justify-center rounded-md px-3 py-3">
                  <Abc />
                  <span className="sr-only">Add to favorite</span>
                </button>
              </div>
            </form>

            <div className="mx-auto mt-6 w-full divide-y border-t">
              {buyDetails.map((item, index) => (
                <Disclosure as="div" key={index} className="p-6">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="${open ?  '' : 'rotate-180 transform'} font-medium  group-data-[hover]:fill-white/50 group-data-[open]:text-indigo-500">
                          {tittle}
                        </span>
                        <div className="size-5  group-data-[open]:text-indigo-500">
                          {open ? <MinusIcon /> : <PlusIcon />}
                        </div>
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 text-sm/5 ">
                        {item.items}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

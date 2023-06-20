"use client";

import { SearchServicesProps } from '../types';
import React, { useState, useEffect, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react'
import { services } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const Services = ({ selectedService, setSelectedService }: SearchServicesProps) => {
  const [selectedServiceId, setSelectedServiceId] = useState(0);

  const [query, setQuery] = useState('')

  const filteredServices =
    query === ''
      ? ['All Services', ...services]
      : ['All Services', ...services.filter((service) => service.toLowerCase().includes(query.toLowerCase()))];

  useEffect(() => {
    const navBlogElement = document.getElementById('navServices');
    if (navBlogElement) {
      navBlogElement.classList.add('active-link');
    }
  }, []);



  const showAllArticles = selectedService === 'All Services';




  /**ALL ARTICLES */
  const getServiceArticle = (serviceId: number) => {
    switch (serviceId) {
      case 1:
        return (


          <article className='service-article' id='service1'>
            <h2 className="paragraph-header">
              Advisory Services and Policy Development
            </h2>
            <p className='article-text'>
              We pride in working with entities to ensure
              that we contribute to creating the positive
              impact/change that our clients strive to create
              in the communities they serve to improve their
              quality of life, and ensure a more self-reliant
              and sustainable future.
            </p>
            <br />
            <ul className='article-text'>
              <li>
                Offering professional procurement and supply chain services.
              </li>
              <li>
                Assisting in the recruitment and recommendation of professional staff.
              </li>
              <li>
                Developing customized advisory services tailored to the needs of clients.
              </li>
              <li>
                Contributing to the development of policies and best practices in grants management, budgeting, finance, operations, procurement, and travel.
              </li>
            </ul>


          </article>
        );
      case 2:
        return (


          <article className='service-article' id='service2'>
            <h2 className="paragraph-header">
              Grant Management and Capacity Building:
            </h2>
            <p className='article-text'>
              We pride in working with entities to ensure
              that we contribute to creating the positive
              impact/change that our clients strive to create
              in the communities they serve to improve their
              quality of life, and ensure a more self-reliant
              and sustainable future.
            </p>
            <br />
            <ul className='article-text'>
              <li>
                Building capacity of NGOs/CSOs/CBOs to continuously win grants.
              </li>
              <li>
                Documenting internal Financial Controls (IFCs)
                for NGOs/CSOs/CBOs to strengthen processes and drive growth.
              </li>
              <li>
                Developing and documenting Standard Operating Procedures
                (SOPs), Manuals, Policies, and best practices in grants management.
              </li>
              <li>
                Conducting hands-on basic financial and grants management flagship training.
              </li>
            </ul>


          </article>
        );
      case 3:
        return (


          <article className='service-article' id='service3'>
            <h2 className="paragraph-header">
              Training and Capacity Building
            </h2 >
            <p className='article-text'>
              We pride in working with entities to ensure
              that we contribute to creating the positive
              impact/change that our clients strive to create
              in the communities they serve to improve their
              quality of life, and ensure a more self-reliant
              and sustainable future.
            </p>
            <br />
            <ul className='article-text'>
              <li>
                Conducting flagship grants and financial management training programs.
              </li>
              <li>
                Providing specialized training in project management, budgeting, financial management, and proposal writing/resource mobilization.
              </li>
              <li>
                Offering training in sustainability planning and reporting.
              </li>
              <li>
                Documenting best practices and policies, including documentation of procedures and policies in grants and financial management.
              </li>
            </ul>


          </article>
        );
      case 4:
        return (


          <article className='service-article' id='service4'>
            <h2 className="paragraph-header">
              Financial Planning and Management
            </h2 >
            <p className='article-text'>
              We pride in working with entities to ensure
              that we contribute to creating the positive
              impact/change that our clients strive to create
              in the communities they serve to improve their
              quality of life, and ensure a more self-reliant
              and sustainable future.
            </p>
            <br />
            <ul className='article-text'>
              <li>
                Providing user-friendly financial recording and bookkeeping tools.
              </li>
              <li>
                Offering financial and strategic business advice for informed decision-making.
              </li>
              <li>
                Assisting with cost recovery modeling (CRM) for organizational sustainability.
              </li>
              <li>
                Supporting private and public entities in efficient resource utilization and profit maximization.
              </li>
            </ul>


          </article>
        );
      default:
        return null;
    }
  };


  return (
    <main className='kamsa-container '>
      <header>
        <h1 className="heading">
          Our Services:
          <span className="highlight">
            {" "}Tailored Solutions for Sustainable Financial & Grants Management
          </span>.
        </h1>
      </header>


      <section className="section-container services-section">

        <aside className='services-search'>
          <Listbox value={selectedService} onChange={setSelectedService}>
            <div className="relative w-full">

              <Listbox.Button className="relative w-full py-2
              pl-3 pr-10 text-left bg-white border border-gray-300
               rounded-md shadow-sm focus:outline-none"

              >
                <span className="block truncate article-text">
                  {selectedService ? selectedService : "All Services"}
                </span>

                <FontAwesomeIcon icon={faAngleDown} />


              </Listbox.Button>


              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >


                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base
                   bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black 
                   ring-opacity-5  sm:text-sm custom-listbox-options">
                  {filteredServices.length === 0 && query !== '' && (
                    <Listbox.Option value={query} className="cursor-default 
                      select-none">
                      Create {query}
                    </Listbox.Option>
                  )}
                  {filteredServices.map((item, index) => (
                    <Listbox.Option
                      key={item}
                      value={item}
                      onClick={() => setSelectedServiceId(index)}
                      className={({ active }) =>
                        `relative py-2 pl-3 pr-9 ${active ? 'bg-primary-blue article-text active-red' : 'article-text active-red'
                        } ${active ? 'focus:outline-none' : ''}`
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium ' : 'font-normal Link'}`}
                          >
                            {item}
                          </span>
                          {selected && (
                            <span
                              className={`absolute inset-y-0 right-0 flex items-center pr-2 ${active ? 'active-red' : 'text-primary-blue'
                                }`}
                            >
                            </span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>

              </Transition>
            </div>
          </Listbox>
        </aside>



        <section className='services-articles'>
          {selectedServiceId === null || selectedServiceId === 0 ? (
            // Show all articles
            <>
              {getServiceArticle(1)}
              {getServiceArticle(2)}
              {getServiceArticle(3)}
              {getServiceArticle(4)}

            </>
          ) : selectedServiceId === 1 ? (
            // Show specific article for the second option
            getServiceArticle(1)
          ) : selectedServiceId === 2 ? (
            // Show specific article for the second option
            getServiceArticle(2)
          ) : selectedServiceId === 3 ? (
            // Show specific article for the second option
            getServiceArticle(3)
          ) : selectedServiceId === 4 ? (
            // Show specific article for the second option
            getServiceArticle(4)
          ) : null}
        </section>





      </section>


    </main>
  )
}

export default Services